const TEMPLATE_URL = "assets/booking-template.pdf";

const HOTELS = [
  {
    id: "meroddi-beyoglu",
    property: "Meroddi Beyoğlu Residence",
    address: "Kaptanpaşa, Piyalepaşa Blv. No:3 D:1, 34440 Beyoğlu/İstanbul, Türkiye",
    phone: "+90 850 360 0627",
  },
  {
    id: "meridiani-taksim",
    property: "Meridiani Taksim Hotel",
    address: "Bostan, Yaya Köprüsü Sk. No:20, 34435 Beyoğlu/İstanbul, Türkiye",
    phone: "+90 212 237 00 21",
  },
  {
    id: "saratoga-sultanahmet",
    property: "Saratoga Hotel - Sultanahmet",
    address: "Küçük Ayasofya, Nakilbent Sk. No:25, 34093 Fatih/İstanbul, Türkiye",
    phone: "+90 532 459 14 32",
  },
  {
    id: "arife-sultan",
    property: "Arife Sultan Hotel",
    address: "Alemdar, Çatalçeşme Sk. No:8, 34410 Fatih/İstanbul, Türkiye",
    phone: "+90 212 514 03 73",
  },
  {
    id: "anthemis",
    property: "Anthemis Hotel",
    address: "Alemdar, Hacı Tahsin Bey Sk. No:11, 34420 Fatih/İstanbul, Türkiye",
    phone: "+90 212 511 03 70",
  },
  {
    id: "amira-istanbul",
    property: "Hotel Amira Istanbul",
    address: "Küçük Ayasofya, Mustafapaşa Sok. No:43, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 212 516 16 40",
  },
  {
    id: "arven",
    property: "Arven Hotel",
    address: "Küçük Ayasofya, Çayıroğlu Sk. No:6, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 547 458 09 10",
  },
  {
    id: "fehmi-bey",
    property: "Hotel Fehmi Bey",
    address: "Binbirdirek, Üçler Sk. No:15, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 212 638 90 83",
  },
  {
    id: "sphendon",
    property: "Hotel Sphendon",
    address: "Sultan Ahmet, Akbıyık Değirmeni Sk. No:44, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 212 518 58 20",
  },
  {
    id: "biz-cevahir-sultanahmet",
    property: "Biz Cevahir Hotel Sultanahmet",
    address: "Cankurtaran, Kutlugün Sk. No:8, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 212 458 55 55",
  },
  {
    id: "sultanahmet-cesme",
    property: "Sultanahmet Cesme Hotel",
    address: "Küçük Ayasofya, Şht. Mehmetpaşa Sok. No:22, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 212 517 64 64",
  },
  {
    id: "the-and",
    property: "The And Hotel",
    address: "Alemdar, Yerebatan Cd. No:18, 34110 Fatih/İstanbul, Türkiye",
    phone: "+90 533 259 80 52",
  },
  {
    id: "seatanbul",
    property: "Seatanbul Hotel",
    address: "Küçük Ayasofya, Çayıroğlu Sk. 26/A, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 506 099 45 63",
  },
  {
    id: "peninsula",
    property: "Hotel Peninsula",
    address: "Cankurtaran, Adliye Sk. No:6, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 212 458 68 50",
  },
  {
    id: "world-house-galata",
    property: "World House Boutique Hotel Galata",
    address: "Şahkulu, Galip Dede Cd. No:85/A, 34421 Beyoğlu/İstanbul, Türkiye",
    phone: "+90 544 293 55 20",
  },
  {
    id: "alp-guesthouse-sultanahmet",
    property: "Hotel Alp Guesthouse Sultanahmet",
    address: "Cankurtaran, Adliye Sk. No:4, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 212 517 70 67",
  },
  {
    id: "side",
    property: "Side Hotel",
    address: "Cankurtaran, Utangaç Sk. No:22, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 212 458 58 70",
  },
  {
    id: "grand-palace",
    property: "Grand Palace Hotel",
    address: "Hürriyet Mahallesi, Hürriyet Caddesi, Yenibosna Merkez, Altın Sk. No:29, 34191 Bahçelievler/İstanbul, Türkiye",
    phone: "+90 212 494 37 37",
  },
  {
    id: "hhk-downtown",
    property: "HHK Hotel Downtown",
    address: "Emin Sinan Mahallesi, Emin Sinan Hamamı Sk. No:16, 34126 Fatih/İstanbul, Türkiye",
    phone: "+90 212 638 01 05",
  },
  {
    id: "lady-diana",
    property: "Lady Diana Hotel",
    address: "Binbirdirek, Terzihane Sok. No:15, 34122 Fatih/İstanbul, Türkiye",
    phone: "+90 212 968 29 29",
  },
];

const form = document.querySelector("#booking-form");
const bookingIdInput = document.querySelector("#booking-id");
const newBookingIdButton = document.querySelector("#new-booking-id");
const clientInput = document.querySelector("#client-name");
const hotelSelect = document.querySelector("#hotel-select");
const arrivalInput = document.querySelector("#arrival-date");
const departureInput = document.querySelector("#departure-date");
const nightsOutput = document.querySelector("#night-count");
const dailyRateOutput = document.querySelector("#daily-rate");
const totalOutput = document.querySelector("#total-price");
const paymentDateOutput = document.querySelector("#payment-date-copy");
const errorOutput = document.querySelector("#error-message");
const preview = document.querySelector("#pdf-preview");
const previewStatus = document.querySelector("#preview-status");
const previewPlaceholder = document.querySelector("#preview-placeholder");
const previewButton = document.querySelector("#preview-button");
const downloadButton = document.querySelector("#download-button");
const singleTab = document.querySelector("#single-tab");
const batchTab = document.querySelector("#batch-tab");
const batchPanel = document.querySelector("#batch-panel");
const batchInput = document.querySelector("#batch-input");
const batchFile = document.querySelector("#batch-file");
const batchExample = document.querySelector("#batch-example");
const batchErrors = document.querySelector("#batch-errors");
const batchStatus = document.querySelector("#batch-status");
const batchProgress = document.querySelector("#batch-progress");
const batchGenerateButton = document.querySelector("#batch-generate");
const batchStopButton = document.querySelector("#batch-stop");
const batchDownloadButton = document.querySelector("#batch-download");
const batchResults = document.querySelector("#batch-results");
const batchList = document.querySelector("#batch-list");
const batchReadyCount = document.querySelector("#batch-ready-count");
const batchNavigation = document.querySelector("#batch-navigation");
const batchPrevious = document.querySelector("#batch-previous");
const batchNext = document.querySelector("#batch-next");
const batchPosition = document.querySelector("#batch-position");
const previewTitle = document.querySelector("#preview-title");
const previewSpinner = document.querySelector("#preview-spinner");
const previewPlaceholderCopy = document.querySelector("#preview-placeholder-copy");
const singleStatusDot = document.querySelector("#single-status-dot");

let templateBytes;
let templatePromise;
let nameFontPromise;
let currentPdfBytes;
let currentPreviewUrl;
let refreshTimer;
let singleRequestVersion = 0;
let mode = "single";
let parsedBatch = { entries: [], errors: [] };
let batchBookings = [];
let selectedBatchIndex = -1;
let batchIsGenerating = false;
let batchIsZipping = false;
let batchStopRequested = false;
let batchInputVersion = 0;
const hotelRates = new Map();
const usedBookingIds = new Set();

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const weekdayNames = [
  "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",
];

function randomInteger(maximum) {
  if (globalThis.crypto?.getRandomValues) {
    const values = new Uint32Array(1);
    const limit = 0x100000000 - (0x100000000 % maximum);
    do globalThis.crypto.getRandomValues(values);
    while (values[0] >= limit);
    return values[0] % maximum;
  }
  return Math.floor(Math.random() * maximum);
}

function generateBookingId() {
  let id;
  do {
    id = String(randomInteger(2));
    for (let index = 0; index < 8; index += 1) id += String(randomInteger(10));
  } while (usedBookingIds.has(id));
  usedBookingIds.add(id);
  return id;
}

function assignHotelRates() {
  const availableRates = Array.from({ length: 31 }, (_, index) => index + 50);
  for (let index = availableRates.length - 1; index > 0; index -= 1) {
    const swapIndex = randomInteger(index + 1);
    [availableRates[index], availableRates[swapIndex]] = [availableRates[swapIndex], availableRates[index]];
  }
  HOTELS.forEach((hotel, index) => hotelRates.set(hotel.id, availableRates[index]));
}

function selectedHotel() {
  return HOTELS.find((hotel) => hotel.id === hotelSelect.value) || HOTELS[0];
}

function applyHotelSelection() {
  refreshPreview();
}

function parseIsoDate(value) {
  return BookingUtils.parseIsoDate(value);
}

// Commas explicitly separate guests. Four unseparated words are two
// first/last-name pairs; other names remain one guest to avoid guessing.
function parseGuestNames(value) {
  const normalized = value.trim().replace(/\s+/g, " ");
  if (!normalized) return [];
  if (normalized.includes(",")) {
    return normalized.split(",").map(BookingUtils.normalizeName).filter(Boolean);
  }
  const words = normalized.split(" ");
  return words.length === 4
    ? [BookingUtils.normalizeName(words.slice(0, 2).join(" ")), BookingUtils.normalizeName(words.slice(2).join(" "))]
    : [BookingUtils.normalizeName(normalized)];
}

function calculateStay() {
  return createStay({
    bookingId: bookingIdInput.value,
    guestNames: parseGuestNames(clientInput.value),
    hotel: selectedHotel(),
    arrival: parseIsoDate(arrivalInput.value),
    departure: parseIsoDate(departureInput.value),
  });
}

function createStay({ bookingId, guestNames, hotel, arrival, departure }) {
  const clientName = guestNames.join(", ");
  const dailyRate = hotelRates.get(hotel.id);

  if (!/^[01]\d{8}$/.test(bookingId)) throw new Error("Generate a valid 9-digit Booking ID.");
  if (!clientName) throw new Error("Enter the client name.");
  if (guestNames.length > 2) throw new Error("Enter at most two guests, separated by a comma.");
  if (!Number.isInteger(dailyRate) || dailyRate < 50 || dailyRate > 80) throw new Error("Select a valid hotel.");
  if (!arrival || !departure) throw new Error("Select both arrival and departure dates.");

  const nights = BookingUtils.validateDates(arrival, departure);

  return {
    bookingId,
    clientName,
    guestNames,
    hotelId: hotel.id,
    property: hotel.property,
    address: hotel.address,
    phone: hotel.phone,
    dailyRate,
    arrival,
    departure,
    nights,
    total: nights * dailyRate,
  };
}

function formatFieldDate(date) {
  return `${monthNames[date.getUTCMonth()]} ${date.getUTCDate()}, ${date.getUTCFullYear()}`;
}

function formatCancellationDate(date) {
  return `${date.getUTCDate()} ${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function formatLongDate(date) {
  return `${weekdayNames[date.getUTCDay()]}, ${date.getUTCDate()} ${monthNames[date.getUTCMonth()]} ${date.getUTCFullYear()}`;
}

function formatMoney(value) {
  return value.toLocaleString("en-US", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function toPdfText(value) {
  return value
    .replace(/Ğ/g, "G")
    .replace(/ğ/g, "g")
    .replace(/Ş/g, "S")
    .replace(/ş/g, "s")
    .replace(/ı/g, "i")
    .replace(/İ/g, "I")
    .replace(/[‘’]/g, "'")
    .replace(/[“”]/g, '"')
    .replace(/[–—]/g, "-")
    .replace(/[^\x20-\x7E\u00A0-\u00FF€]/g, "");
}

function wrapText(font, text, size, maxWidth, maxLines) {
  const words = text.split(/\s+/);
  const lines = [];
  let line = "";

  words.forEach((word) => {
    const candidate = line ? `${line} ${word}` : word;
    if (!line || font.widthOfTextAtSize(candidate, size) <= maxWidth) {
      line = candidate;
    } else {
      lines.push(line);
      line = word;
    }
  });
  if (line) lines.push(line);

  if (lines.length <= maxLines) return lines;
  const visible = lines.slice(0, maxLines);
  visible[maxLines - 1] = lines.slice(maxLines - 1).join(" ");
  while (font.widthOfTextAtSize(visible[maxLines - 1], size) > maxWidth && visible[maxLines - 1].length > 1) {
    visible[maxLines - 1] = visible[maxLines - 1].slice(0, -1);
  }
  return visible;
}

function setError(message = "") {
  errorOutput.textContent = message;
  errorOutput.classList.toggle("visible", Boolean(message));
}

function fitFontSize(font, text, preferredSize, maxWidth, minimumSize = 5.7) {
  let size = preferredSize;
  while (size > minimumSize && font.widthOfTextAtSize(text, size) > maxWidth) size -= 0.1;
  return size;
}

function drawCleanText(page, text, options) {
  page.drawText(text, {
    x: options.x,
    y: options.y,
    size: options.size,
    font: options.font,
    color: options.color || PDFLib.rgb(0, 0, 0),
    lineHeight: options.size,
  });
}

function drawCenteredText(page, text, font, size, box) {
  const width = font.widthOfTextAtSize(text, size);
  drawCleanText(page, text, {
    x: box.x + Math.max(0, (box.width - width) / 2),
    y: box.baseline,
    size,
    font,
    color: PDFLib.rgb(0, 0, 0),
  });
}

async function loadTemplate() {
  if (templateBytes) return templateBytes;
  if (!templatePromise) {
    templatePromise = fetch(TEMPLATE_URL).then((response) => {
      if (!response.ok) throw new Error("The PDF template could not be loaded.");
      return response.arrayBuffer();
    }).then((bytes) => {
      templateBytes = bytes;
      return bytes;
    }).catch((error) => {
      templatePromise = null;
      throw error;
    });
  }
  return templatePromise;
}

function loadNameFont() {
  if (!nameFontPromise) {
    nameFontPromise = fetch("assets/fonts/LiberationSans-Bold.ttf").then((response) => {
      if (!response.ok) throw new Error("The guest name font could not be loaded.");
      return response.arrayBuffer();
    }).catch((error) => {
      nameFontPromise = null;
      throw error;
    });
  }
  return nameFontPromise;
}

async function generatePdf(stay) {
  const source = await loadTemplate();
  const pdfDoc = await PDFLib.PDFDocument.load(source);
  const page = pdfDoc.getPages()[0];
  const regular = await pdfDoc.embedFont(PDFLib.StandardFonts.Helvetica);
  const bold = await pdfDoc.embedFont(PDFLib.StandardFonts.HelveticaBold);
  let guestFont = bold;
  try {
    bold.encodeText(stay.clientName);
  } catch {
    pdfDoc.registerFontkit(fontkit);
    guestFont = await pdfDoc.embedFont(await loadNameFont(), { subset: true });
    const supported = new Set(guestFont.getCharacterSet());
    if (Array.from(stay.clientName).some((letter) => !supported.has(letter.codePointAt(0)))) {
      throw new Error("A guest name contains characters the PDF font does not support.");
    }
  }
  const white = PDFLib.rgb(1, 1, 1);
  const fieldGray = PDFLib.rgb(0.865, 0.865, 0.865);
  const policyGray = PDFLib.rgb(0.8676, 0.8676, 0.8676);

  // Property, address, and phone are replaced inside their existing boxes.
  const propertyText = toPdfText(stay.property);
  page.drawRectangle({ x: 138.0, y: 642.8, width: 141.5, height: 13.5, color: white });
  const propertySize = fitFontSize(bold, propertyText, 7.2, 138, 5.7);
  drawCleanText(page, propertyText, {
    x: 139.8,
    y: 649.3,
    size: propertySize,
    font: bold,
    color: PDFLib.rgb(0, 0, 0),
  });

  const addressText = toPdfText(stay.address);
  page.drawRectangle({ x: 138.0, y: 606.8, width: 141.5, height: 23.0, color: white });
  let addressSize = 7.2;
  let addressLines = wrapText(bold, addressText, addressSize, 138, 3);
  while (addressLines.some((line) => bold.widthOfTextAtSize(line, addressSize) > 138) && addressSize > 5.7) {
    addressSize -= 0.1;
    addressLines = wrapText(bold, addressText, addressSize, 138, 3);
  }
  addressLines.forEach((line, index) => {
    drawCleanText(page, line, {
      x: 139.8,
      y: 626.0 - (index * 9.0),
      size: addressSize,
      font: bold,
      color: PDFLib.rgb(0, 0, 0),
    });
  });

  const phoneText = toPdfText(stay.phone);
  page.drawRectangle({ x: 138.0, y: 578.9, width: 141.5, height: 13.5, color: white });
  const phoneSize = fitFontSize(bold, phoneText, 7.2, 138, 5.7);
  drawCleanText(page, phoneText, {
    x: 139.8,
    y: 583.2,
    size: phoneSize,
    font: bold,
    color: PDFLib.rgb(0, 0, 0),
  });

  // Cancellation policy: redraw the complete gray box as one consistently
  // styled, wrapping paragraph so the Arrival date can change without causing
  // mixed font weights, overlap, or text outside the box.
  const cancellationBox = { x: 38.055, y: 533.067, width: 517.605, height: 35.816 };
  page.drawRectangle({ ...cancellationBox, color: policyGray });
  const cancellationText = `Cancellation Policy: Risk-free booking! Cancel before ${formatCancellationDate(stay.arrival)} and you'll pay nothing! Any cancellation received within 1 day prior to the arrival date will be charged for the entire stay. Failure to arrive at your hotel or property will be treated as a No-Show and will incur a charge of 100% of the booking value. (Hotel policy).`;
  const cancellationSize = 7.4;
  const cancellationLines = wrapText(regular, cancellationText, cancellationSize, cancellationBox.width - 5.85, 3);
  cancellationLines.forEach((line, index) => {
    drawCleanText(page, line, {
      x: 40.98,
      y: 560.0 - (index * 10.2),
      size: cancellationSize,
      font: regular,
      color: PDFLib.rgb(0, 0, 0),
    });
  });

  // Leave the existing Promotion field empty while preserving its cell and label.
  page.drawRectangle({ x: 381.5, y: 636.1, width: 161.6, height: 10.7, color: fieldGray });

  // Booking ID: nine digits generated by the app, always beginning with 0 or 1.
  page.drawRectangle({ x: 137.2, y: 726.2, width: 72, height: 13.5, color: white });
  drawCleanText(page, stay.bookingId, {
    x: 138.7,
    y: 728.35,
    size: 7.2,
    font: bold,
    color: PDFLib.rgb(0, 0, 0),
  });

  // Keep the final name level with Client; stack the first name above it.
  // Use the original font size rather than shrinking two guest names.
  const clientNames = stay.guestNames || parseGuestNames(stay.clientName);
  const clientSize = 7.2;
  if (clientNames.some((name, index) => guestFont.widthOfTextAtSize(name + (index < clientNames.length - 1 ? "," : ""), clientSize) > 140)) {
    throw new Error("A guest name is too long for the Client field at the original font size.");
  }
  page.drawRectangle({ x: 137.2, y: 695.0, width: 142.3, height: 22.8, color: white });
  clientNames.forEach((name, index) => {
    drawCleanText(page, name + (index < clientNames.length - 1 ? "," : ""), {
      x: 138.7,
      y: 697.0 + (clientNames.length - 1 - index) * 10.0,
      size: clientSize,
      font: guestFont,
      color: PDFLib.rgb(0, 0, 0),
    });
  });

  // Arrival and departure values sit in fixed gray cells.
  const arrivalBox = { x: 88.1, y: 494.0, width: 130.8, height: 14.1, baseline: 497.1 };
  const departureBox = { x: 290.5, y: 494.0, width: 131.0, height: 14.1, baseline: 497.1 };
  page.drawRectangle({ ...arrivalBox, color: fieldGray });
  page.drawRectangle({ ...departureBox, color: fieldGray });

  const arrivalText = formatFieldDate(stay.arrival);
  const departureText = formatFieldDate(stay.departure);
  const arrivalSize = fitFontSize(bold, arrivalText, 7.2, arrivalBox.width - 8);
  const departureSize = fitFontSize(bold, departureText, 7.2, departureBox.width - 8);
  drawCenteredText(page, arrivalText, bold, arrivalSize, arrivalBox);
  drawCenteredText(page, departureText, bold, departureSize, departureBox);

  // Payment line: total = nights x the selected hotel's daily rate.
  page.drawRectangle({ x: 36.9, y: 389.9, width: 519.5, height: 12.5, color: white });
  const paymentLine = `You will pay EUR ${formatMoney(stay.total)} to the property on your check-in date of ${formatLongDate(stay.arrival)}.`;
  const paymentSize = fitFontSize(regular, paymentLine, 7.2, 515, 6.2);
  drawCleanText(page, paymentLine, {
    x: 37.85,
    y: 392.35,
    size: paymentSize,
    font: regular,
    color: PDFLib.rgb(0, 0, 0),
  });

  // Guest List: keep the label regular and use the same client name in bold.
  page.drawRectangle({ x: 36.9, y: 379.8, width: 519.5, height: 10.0, color: white });
  const guestLabel = "Guest List: ";
  const guestSize = fitFontSize(guestFont, guestLabel + stay.clientName, 7.2, 515, 6.0);
  drawCleanText(page, guestLabel, {
    x: 38.0,
    y: 382.3,
    size: guestSize,
    font: regular,
    color: PDFLib.rgb(0, 0, 0),
  });
  drawCleanText(page, stay.clientName, {
    x: 38.0 + regular.widthOfTextAtSize(guestLabel, guestSize),
    y: 382.3,
    size: guestSize,
    font: guestFont,
    color: PDFLib.rgb(0, 0, 0),
  });

  pdfDoc.setModificationDate(new Date());
  return pdfDoc.save({ useObjectStreams: false });
}

function updateCalculation(stay) {
  nightsOutput.textContent = String(stay.nights);
  dailyRateOutput.textContent = `EUR ${formatMoney(stay.dailyRate)}`;
  totalOutput.textContent = `EUR ${formatMoney(stay.total)}`;
  paymentDateOutput.textContent = `Payable on arrival: ${formatLongDate(stay.arrival)}`;
}

function setBusy(isBusy, message) {
  previewButton.disabled = isBusy;
  downloadButton.disabled = isBusy;
  newBookingIdButton.disabled = isBusy;
  if (message && mode === "single") previewStatus.textContent = message;
}

function clearPreview(message, isLoading = false) {
  if (currentPreviewUrl) URL.revokeObjectURL(currentPreviewUrl);
  currentPreviewUrl = null;
  preview.removeAttribute("src");
  previewPlaceholderCopy.textContent = message;
  previewSpinner.hidden = !isLoading;
  previewPlaceholder.classList.remove("hidden");
}

function showPreviewBlob(blob) {
  if (currentPreviewUrl) URL.revokeObjectURL(currentPreviewUrl);
  currentPreviewUrl = URL.createObjectURL(blob);
  preview.src = `${currentPreviewUrl}#view=FitH&toolbar=1&navpanes=0`;
  previewPlaceholder.classList.add("hidden");
}

function saveDownload(blob, filename) {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30000);
}

async function refreshPreview() {
  clearTimeout(refreshTimer);
  if (mode !== "single") return;
  const requestVersion = ++singleRequestVersion;
  try {
    const stay = calculateStay();
    setError();
    updateCalculation(stay);
    setBusy(true, "Generating updated PDF…");
    clearPreview("Building your PDF preview…", true);
    const bytes = await generatePdf(stay);
    if (requestVersion !== singleRequestVersion || mode !== "single") return;
    currentPdfBytes = bytes;
    showPreviewBlob(new Blob([bytes], { type: "application/pdf" }));
    const nightLabel = stay.nights === 1 ? "night" : "nights";
    previewStatus.textContent = `${stay.nights} ${nightLabel} · EUR ${formatMoney(stay.total)}`;
  } catch (error) {
    if (requestVersion !== singleRequestVersion || mode !== "single") return;
    currentPdfBytes = null;
    setError(error.message || "Unable to generate the PDF.");
    previewStatus.textContent = "Waiting for valid booking details";
    clearPreview("Enter valid booking details to view the PDF.");
  } finally {
    if (requestVersion === singleRequestVersion) setBusy(false);
  }
}

function scheduleRefresh() {
  clearTimeout(refreshTimer);
  singleRequestVersion += 1;
  currentPdfBytes = null;
  setBusy(false);
  if (mode !== "single") return;
  try {
    const stay = calculateStay();
    setError();
    updateCalculation(stay);
    clearPreview("Updating your PDF preview…", true);
    previewStatus.textContent = "Updating preview…";
    refreshTimer = setTimeout(refreshPreview, 450);
  } catch (error) {
    setError(error.message);
    previewStatus.textContent = "Waiting for valid booking details";
    clearPreview("Enter valid booking details to view the PDF.");
  }
}

async function downloadPdf() {
  clearTimeout(refreshTimer);
  const requestVersion = ++singleRequestVersion;
  try {
    const stay = calculateStay();
    setError();
    setBusy(true, "Preparing download…");
    const bytes = await generatePdf(stay);
    const blob = new Blob([bytes], { type: "application/pdf" });
    saveDownload(blob, BookingUtils.pdfFilename(stay));
    if (requestVersion === singleRequestVersion && mode === "single") {
      currentPdfBytes = bytes;
      showPreviewBlob(blob);
      previewStatus.textContent = "PDF downloaded";
    }
  } catch (error) {
    if (requestVersion === singleRequestVersion) setError(error.message || "Unable to download the PDF.");
  } finally {
    if (requestVersion === singleRequestVersion) setBusy(false);
  }
}

function readyBatchBookings() {
  return batchBookings.filter((booking) => booking.status === "ready");
}

function setBatchErrors(errors) {
  batchErrors.replaceChildren();
  errors.forEach((error) => {
    const paragraph = document.createElement("p");
    paragraph.textContent = `${error.line ? `Line ${error.line}: ` : ""}${error.message}`;
    batchErrors.appendChild(paragraph);
  });
  batchErrors.classList.toggle("visible", errors.length > 0);
}

function updateBatchControls() {
  const busy = batchIsGenerating || batchIsZipping;
  batchGenerateButton.disabled = busy || parsedBatch.entries.length === 0 || parsedBatch.errors.length > 0;
  batchDownloadButton.disabled = busy || readyBatchBookings().length === 0;
  batchStopButton.hidden = !batchIsGenerating;
  batchStopButton.disabled = batchStopRequested;
  batchInput.readOnly = busy;
  batchFile.disabled = busy;
  batchExample.disabled = busy;
  singleTab.disabled = busy;
  batchTab.disabled = busy;
  batchPanel.setAttribute("aria-busy", String(busy));
  batchReadyCount.textContent = `${readyBatchBookings().length} of ${batchBookings.length} ready`;
}

function updateBatchNavigation() {
  const readyIndices = batchBookings.map((booking, index) => booking.status === "ready" ? index : -1)
    .filter((index) => index !== -1);
  const position = readyIndices.indexOf(selectedBatchIndex);
  batchPosition.textContent = `${position + 1} of ${readyIndices.length}`;
  batchPrevious.disabled = position <= 0;
  batchNext.disabled = position < 0 || position >= readyIndices.length - 1;
}

function readBatchInput() {
  if (batchIsGenerating || batchIsZipping) return;
  parsedBatch = BookingUtils.parseBatchInput(batchInput.value);
  setBatchErrors(parsedBatch.errors);
  batchBookings = [];
  selectedBatchIndex = -1;
  batchList.replaceChildren();
  batchResults.hidden = true;
  batchProgress.hidden = true;
  batchGenerateButton.textContent = "Generate all PDFs";
  batchDownloadButton.textContent = "Download all (.zip)";
  if (parsedBatch.errors.length) {
    batchStatus.textContent = `Fix ${parsedBatch.errors.length} ${parsedBatch.errors.length === 1 ? "input error" : "input errors"} before generating.`;
  } else if (parsedBatch.entries.length) {
    const count = parsedBatch.entries.length;
    batchStatus.textContent = `${count} ${count === 1 ? "booking" : "bookings"} found. Ready to generate.`;
  } else {
    batchStatus.textContent = "Paste your list or upload a text file to get started.";
  }
  updateBatchControls();
  updateBatchNavigation();
  if (mode === "batch") {
    previewTitle.textContent = "Batch preview";
    previewStatus.textContent = "No PDFs generated yet";
    clearPreview("Generate your batch to view the PDFs here.");
  }
}

function updateBatchCard(booking) {
  const ui = booking.ui;
  ui.card.classList.toggle("selected", batchBookings[selectedBatchIndex] === booking);
  ui.card.classList.toggle("failed", booking.status === "failed");
  ui.status.className = `batch-card-status ${booking.status}`;
  ui.status.textContent = booking.status === "ready" ? `Ready · ${booking.stay.nights} ${booking.stay.nights === 1 ? "night" : "nights"}` :
    booking.status === "generating" ? "Generating PDF…" :
    booking.status === "failed" ? booking.error :
    booking.status === "stopped" ? "Not generated · stopped" : "Queued";
  ui.view.disabled = booking.status !== "ready";
  ui.download.disabled = booking.status !== "ready";
  ui.view.setAttribute("aria-pressed", String(batchBookings[selectedBatchIndex] === booking));
}

function renderBatchCards() {
  const fragment = document.createDocumentFragment();
  batchBookings.forEach((booking, index) => {
    const card = document.createElement("li");
    card.className = "batch-card";
    const name = document.createElement("p");
    name.className = "batch-card-name";
    name.textContent = `${index + 1}. ${booking.stay.clientName}`;
    const dates = document.createElement("p");
    dates.className = "batch-card-detail";
    dates.textContent = `${BookingUtils.shortDate(booking.stay.arrival)} – ${BookingUtils.shortDate(booking.stay.departure)}`;
    const hotel = document.createElement("p");
    hotel.className = "batch-card-detail";
    hotel.textContent = booking.stay.property;
    const id = document.createElement("p");
    id.className = "batch-card-detail";
    id.textContent = `ID ${booking.stay.bookingId} · EUR ${formatMoney(booking.stay.total)}`;
    const status = document.createElement("p");
    const actions = document.createElement("div");
    actions.className = "batch-card-actions";
    const view = document.createElement("button");
    view.type = "button";
    view.textContent = "View PDF";
    view.setAttribute("aria-label", `View PDF for ${booking.stay.clientName}`);
    view.addEventListener("click", () => showBatchPdf(index));
    const download = document.createElement("button");
    download.type = "button";
    download.textContent = "Download";
    download.setAttribute("aria-label", `Download PDF for ${booking.stay.clientName}`);
    download.addEventListener("click", () => saveDownload(booking.blob, booking.filename));
    actions.append(view, download);
    card.append(name, dates, hotel, id, status, actions);
    booking.ui = { card, status, view, download };
    updateBatchCard(booking);
    fragment.appendChild(card);
  });
  batchList.replaceChildren(fragment);
  batchResults.hidden = false;
}

function showBatchPdf(index) {
  const booking = batchBookings[index];
  if (mode !== "batch" || !booking || booking.status !== "ready") return;
  const previous = batchBookings[selectedBatchIndex];
  selectedBatchIndex = index;
  if (previous) updateBatchCard(previous);
  updateBatchCard(booking);
  showPreviewBlob(booking.blob);
  previewTitle.textContent = booking.stay.clientName;
  previewStatus.textContent = `${booking.stay.property} · ID ${booking.stay.bookingId}`;
  preview.title = `Booking confirmation PDF for ${booking.stay.clientName}`;
  updateBatchNavigation();
}

function moveBatchPreview(direction) {
  const indices = batchBookings.map((booking, index) => booking.status === "ready" ? index : -1)
    .filter((index) => index !== -1);
  const position = indices.indexOf(selectedBatchIndex);
  const next = indices[position + direction];
  if (next !== undefined) showBatchPdf(next);
}

async function generateBatchPdfs() {
  if (batchIsGenerating || batchIsZipping) return;
  readBatchInput();
  if (!parsedBatch.entries.length || parsedBatch.errors.length) return;

  batchBookings = parsedBatch.entries.map((entry) => {
    const stay = createStay({
      bookingId: generateBookingId(), guestNames: entry.guestNames,
      hotel: HOTELS[randomInteger(HOTELS.length)], arrival: entry.arrival, departure: entry.departure,
    });
    return { stay, filename: BookingUtils.pdfFilename(stay), blob: null, status: "pending" };
  });
  batchIsGenerating = true;
  batchStopRequested = false;
  batchStopButton.textContent = "Stop";
  batchProgress.max = batchBookings.length;
  batchProgress.value = 0;
  batchProgress.hidden = false;
  renderBatchCards();
  updateBatchControls();
  clearPreview("Preparing the first PDF…", true);
  previewStatus.textContent = "Generating batch…";

  try {
    for (let index = 0; index < batchBookings.length; index += 1) {
      if (batchStopRequested) break;
      const booking = batchBookings[index];
      booking.status = "generating";
      updateBatchCard(booking);
      batchStatus.textContent = `Generating PDF ${index + 1} of ${batchBookings.length}…`;
      try {
        const bytes = await generatePdf(booking.stay);
        booking.blob = new Blob([bytes], { type: "application/pdf" });
        booking.status = "ready";
        if (selectedBatchIndex === -1) showBatchPdf(index);
      } catch (error) {
        booking.status = "failed";
        booking.error = error.message || "Unable to generate this PDF.";
      }
      updateBatchCard(booking);
      batchProgress.value = index + 1;
      updateBatchControls();
      updateBatchNavigation();
      await new Promise((resolve) => setTimeout(resolve, 0));
    }
  } finally {
    batchIsGenerating = false;
    batchBookings.filter((booking) => booking.status === "pending").forEach((booking) => {
      booking.status = "stopped";
      updateBatchCard(booking);
    });
    const ready = readyBatchBookings().length;
    const failed = batchBookings.filter((booking) => booking.status === "failed").length;
    const stopped = batchBookings.filter((booking) => booking.status === "stopped").length;
    batchStatus.textContent = `${ready} of ${batchBookings.length} PDFs ready${failed ? ` · ${failed} failed` : ""}${stopped ? ` · ${stopped} not generated` : ""}.`;
    batchGenerateButton.textContent = "Generate again with new IDs";
    batchDownloadButton.textContent = ready === batchBookings.length ? "Download all (.zip)" : "Download ready PDFs (.zip)";
    updateBatchControls();
    updateBatchNavigation();
    if (!ready) {
      previewStatus.textContent = "No PDFs ready";
      clearPreview("Check the errors in the list, then generate again.");
    }
  }
}

async function downloadBatchZip() {
  if (batchIsGenerating || batchIsZipping) return;
  const bookings = readyBatchBookings();
  if (!bookings.length) return;
  batchIsZipping = true;
  updateBatchControls();
  try {
    const zip = await BookingUtils.createZip(bookings.map((booking) => ({ name: booking.filename, blob: booking.blob })),
      (done, total) => { batchStatus.textContent = `Preparing ZIP: ${done} of ${total} PDFs…`; });
    const date = new Date().toISOString().slice(0, 10);
    saveDownload(zip, `Booking Confirmations - ${date} - ${bookings.length} PDFs.zip`);
    batchStatus.textContent = `${bookings.length} PDFs downloaded in one ZIP.`;
  } catch (error) {
    setBatchErrors([{ message: error.message || "Unable to prepare the ZIP." }]);
    batchStatus.textContent = "Individual PDF downloads are still available.";
  } finally {
    batchIsZipping = false;
    updateBatchControls();
  }
}

function setMode(nextMode) {
  if (batchIsGenerating || batchIsZipping || mode === nextMode) return;
  mode = nextMode;
  clearTimeout(refreshTimer);
  singleRequestVersion += 1;
  setBusy(false);
  form.hidden = mode !== "single";
  batchPanel.hidden = mode !== "batch";
  singleTab.classList.toggle("active", mode === "single");
  batchTab.classList.toggle("active", mode === "batch");
  singleTab.setAttribute("aria-selected", String(mode === "single"));
  batchTab.setAttribute("aria-selected", String(mode === "batch"));
  singleTab.tabIndex = mode === "single" ? 0 : -1;
  batchTab.tabIndex = mode === "batch" ? 0 : -1;
  batchNavigation.hidden = mode !== "batch";
  singleStatusDot.hidden = mode !== "single";
  if (mode === "single") {
    previewTitle.textContent = "Live document";
    preview.title = "Generated booking confirmation PDF preview";
    refreshPreview();
  } else if (selectedBatchIndex !== -1) {
    showBatchPdf(selectedBatchIndex);
  } else {
    previewTitle.textContent = "Batch preview";
    previewStatus.textContent = "No PDFs generated yet";
    clearPreview("Generate your batch to view the PDFs here.");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  refreshPreview();
});

[clientInput, arrivalInput, departureInput].forEach((input) => {
  input.addEventListener("input", scheduleRefresh);
});

clientInput.addEventListener("blur", () => {
  const normalized = parseGuestNames(clientInput.value).join(", ");
  if (normalized !== clientInput.value) {
    clientInput.value = normalized;
    scheduleRefresh();
  }
});

hotelSelect.addEventListener("change", applyHotelSelection);

newBookingIdButton.addEventListener("click", () => {
  bookingIdInput.value = generateBookingId();
  refreshPreview();
});

downloadButton.addEventListener("click", downloadPdf);
singleTab.addEventListener("click", () => setMode("single"));
batchTab.addEventListener("click", () => setMode("batch"));
[singleTab, batchTab].forEach((tab) => tab.addEventListener("keydown", (event) => {
  if (!["ArrowLeft", "ArrowRight", "Home", "End"].includes(event.key)) return;
  event.preventDefault();
  const target = event.key === "Home" ? singleTab : event.key === "End" ? batchTab :
    mode === "single" ? batchTab : singleTab;
  if (target.disabled) return;
  setMode(target === singleTab ? "single" : "batch");
  target.focus();
}));
batchInput.addEventListener("input", () => {
  batchInputVersion += 1;
  readBatchInput();
});
batchExample.addEventListener("click", () => {
  batchInputVersion += 1;
  batchInput.value = "Imamova Suray\n25.10.2026-23.12.2026\n\nKURBANOVA EJEGUL\n11.11.26-10.12.26";
  readBatchInput();
  batchInput.focus();
});
batchFile.addEventListener("change", async () => {
  const file = batchFile.files[0];
  if (!file) return;
  const version = ++batchInputVersion;
  try {
    if (!/\.txt$/i.test(file.name)) throw new Error("Choose a .txt file with names and date ranges.");
    const text = await file.text();
    if (version !== batchInputVersion || batchIsGenerating || batchIsZipping) return;
    batchInput.value = text;
    readBatchInput();
  } catch (error) {
    if (version === batchInputVersion) setBatchErrors([{ message: error.message || "Unable to read the text file." }]);
  } finally {
    batchFile.value = "";
  }
});
batchGenerateButton.addEventListener("click", generateBatchPdfs);
batchStopButton.addEventListener("click", () => {
  batchStopRequested = true;
  batchStopButton.disabled = true;
  batchStopButton.textContent = "Stopping…";
  batchStatus.textContent = "Finishing the current PDF, then stopping…";
});
batchDownloadButton.addEventListener("click", downloadBatchZip);
batchPrevious.addEventListener("click", () => moveBatchPreview(-1));
batchNext.addEventListener("click", () => moveBatchPreview(1));
window.addEventListener("beforeunload", () => {
  if (currentPreviewUrl) URL.revokeObjectURL(currentPreviewUrl);
});

assignHotelRates();
bookingIdInput.value = generateBookingId();
applyHotelSelection();
