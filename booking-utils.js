/* Shared parsing and ZIP helpers. No network requests or external dependencies. */
(function (root) {
  "use strict";

  const DAY_MS = 86400000;
  const DATE_TOKEN = "\\d{1,2}\\.\\d{1,2}\\.(?:\\d{4}|\\d{2})";
  const RANGE_PATTERN = new RegExp(`^(${DATE_TOKEN})\\s*[-–—]\\s*(${DATE_TOKEN})$`);
  const INLINE_PATTERN = new RegExp(`^(.+?)\\s+(${DATE_TOKEN})\\s*[-–—]\\s*(${DATE_TOKEN})$`);

  function normalizeName(value) {
    const name = value.trim().replace(/\s+/g, " ");
    if (!/\p{L}/u.test(name) || name !== name.toUpperCase()) return name;
    const locale = /[İıĞğŞş]/.test(name) ? "tr" : undefined;
    return name.toLocaleLowerCase(locale).replace(/(^|[^\p{L}\p{M}])(\p{L})/gu,
      (_, separator, letter) => separator + letter.toLocaleUpperCase(locale)).normalize("NFC");
  }

  function exactDate(year, month, day) {
    const date = new Date(Date.UTC(year, month - 1, day));
    return date.getUTCFullYear() === year && date.getUTCMonth() === month - 1 &&
      date.getUTCDate() === day ? date : null;
  }

  function parseIsoDate(value) {
    const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
    if (!match) return null;
    return exactDate(Number(match[1]), Number(match[2]), Number(match[3]));
  }

  function parseInputDate(value) {
    const match = /^(\d{1,2})\.(\d{1,2})\.(\d{2}|\d{4})$/.exec(value);
    if (!match) return null;
    const year = Number(match[3]) + (match[3].length === 2 ? 2000 : 0);
    if (year < 2000 || year > 2099) return null;
    return exactDate(year, Number(match[2]), Number(match[1]));
  }

  function isoDate(date) {
    return date.toISOString().slice(0, 10);
  }

  function shortDate(date) {
    return [date.getUTCDate(), date.getUTCMonth() + 1, date.getUTCFullYear()]
      .map((part, index) => index < 2 ? String(part).padStart(2, "0") : part).join(".");
  }

  function validateDates(arrival, departure) {
    if (!arrival || !departure) throw new Error("Use valid dates in DD.MM.YYYY or DD.MM.YY format.");
    const nights = Math.round((departure.getTime() - arrival.getTime()) / DAY_MS);
    if (nights < 1) throw new Error("Departure must be at least one day after arrival.");
    if (nights > 730) throw new Error("The stay cannot be longer than 730 nights.");
    return nights;
  }

  function parseBatchInput(value) {
    const lines = value.replace(/^\uFEFF/, "").split(/\r?\n/)
      .map((text, index) => ({ text: text.trim(), number: index + 1 }))
      .filter((line) => line.text);
    const entries = [];
    const errors = [];

    for (let index = 0; index < lines.length;) {
      const line = lines[index];
      const inline = INLINE_PATTERN.exec(line.text);
      let rawName;
      let range;
      let dateLine;

      if (RANGE_PATTERN.test(line.text)) {
        errors.push({ line: line.number, message: "Add a guest name before this date range." });
        index += 1;
        continue;
      }
      if (inline) {
        rawName = inline[1].replace(/\s*[|;:]\s*$/, "");
        range = [null, inline[2], inline[3]];
        dateLine = line.number;
        index += 1;
      } else {
        rawName = line.text;
        const next = lines[index + 1];
        range = next && RANGE_PATTERN.exec(next.text);
        if (!range) {
          errors.push({ line: line.number, message: "Put a date range after the name, for example 25.10.2026-23.12.2026." });
          index += 1;
          continue;
        }
        dateLine = next.number;
        index += 2;
      }

      const guestNames = rawName.split(",").map(normalizeName);
      if (guestNames.length > 2 || guestNames.some((name) => !/\p{L}/u.test(name))) {
        errors.push({ line: line.number, message: "Enter one guest, or two guest names separated by a comma." });
        continue;
      }
      const arrival = parseInputDate(range[1]);
      const departure = parseInputDate(range[2]);
      try {
        const nights = validateDates(arrival, departure);
        entries.push({
          line: line.number, guestNames, clientName: guestNames.join(", "),
          arrival, departure, arrivalIso: isoDate(arrival), departureIso: isoDate(departure), nights,
        });
      } catch (error) {
        errors.push({ line: dateLine, message: error.message });
      }
    }
    return { entries, errors };
  }

  function pdfFilename(stay) {
    const safeName = stay.clientName.normalize("NFKC")
      .replace(/[^\p{L}\p{N}]+/gu, "-").replace(/^-|-$/g, "").slice(0, 100) || "Guest";
    return `Booking Confirmation - ${safeName} - ${isoDate(stay.arrival)} - ${stay.bookingId}.pdf`;
  }

  const crcTable = new Uint32Array(256);
  for (let index = 0; index < 256; index += 1) {
    let crc = index;
    for (let bit = 0; bit < 8; bit += 1) crc = (crc >>> 1) ^ ((crc & 1) ? 0xedb88320 : 0);
    crcTable[index] = crc >>> 0;
  }

  function crc32(bytes) {
    let crc = 0xffffffff;
    for (const byte of bytes) crc = (crc >>> 8) ^ crcTable[(crc ^ byte) & 0xff];
    return (crc ^ 0xffffffff) >>> 0;
  }

  // Stored ZIP entries: PDFs are already compressed. Keeping the file Blobs as
  // parts avoids copying the complete batch into another large byte array.
  async function createZip(files, onProgress = () => {}) {
    if (!files.length) throw new Error("Generate at least one PDF first.");
    if (files.length > 65535) throw new Error("Download fewer than 65,536 PDFs at a time.");
    const encoder = new TextEncoder();
    const parts = [];
    const directory = [];
    let offset = 0;
    let directorySize = 0;
    const now = new Date();
    const dosTime = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
    const dosDate = ((Math.max(1980, now.getFullYear()) - 1980) << 9) |
      ((now.getMonth() + 1) << 5) | now.getDate();

    for (let index = 0; index < files.length; index += 1) {
      const file = files[index];
      const name = encoder.encode(file.name);
      const size = file.blob.size;
      if (offset + size + 30 + name.length > 0xffffffff) {
        throw new Error("This ZIP is too large. Download a smaller batch.");
      }
      const crc = crc32(new Uint8Array(await file.blob.arrayBuffer()));
      const local = new Uint8Array(30 + name.length);
      const localView = new DataView(local.buffer);
      localView.setUint32(0, 0x04034b50, true);
      localView.setUint16(4, 20, true);
      localView.setUint16(6, 0x0800, true);
      localView.setUint16(10, dosTime, true);
      localView.setUint16(12, dosDate, true);
      localView.setUint32(14, crc, true);
      localView.setUint32(18, size, true);
      localView.setUint32(22, size, true);
      localView.setUint16(26, name.length, true);
      local.set(name, 30);

      const central = new Uint8Array(46 + name.length);
      const centralView = new DataView(central.buffer);
      centralView.setUint32(0, 0x02014b50, true);
      centralView.setUint16(4, 20, true);
      centralView.setUint16(6, 20, true);
      centralView.setUint16(8, 0x0800, true);
      centralView.setUint16(12, dosTime, true);
      centralView.setUint16(14, dosDate, true);
      centralView.setUint32(16, crc, true);
      centralView.setUint32(20, size, true);
      centralView.setUint32(24, size, true);
      centralView.setUint16(28, name.length, true);
      centralView.setUint32(42, offset, true);
      central.set(name, 46);

      parts.push(local, file.blob);
      directory.push(central);
      directorySize += central.length;
      offset += local.length + size;
      onProgress(index + 1, files.length);
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
    if (offset + directorySize + 22 > 0xffffffff) {
      throw new Error("This ZIP is too large. Download a smaller batch.");
    }
    const end = new Uint8Array(22);
    const endView = new DataView(end.buffer);
    endView.setUint32(0, 0x06054b50, true);
    endView.setUint16(8, files.length, true);
    endView.setUint16(10, files.length, true);
    endView.setUint32(12, directorySize, true);
    endView.setUint32(16, offset, true);
    return new Blob([...parts, ...directory, end], { type: "application/zip" });
  }

  const api = { normalizeName, parseIsoDate, parseInputDate, isoDate, shortDate,
    validateDates, parseBatchInput, pdfFilename, createZip };
  root.BookingUtils = api;
  if (typeof module !== "undefined" && module.exports) module.exports = api;
})(globalThis);
