# Booking PDF Editor

A static browser app for an authorized booking-confirmation workflow. It generates an updated PDF locally in the visitor's browser.

## Batch bookings

1. Select **Batch bookings**.
2. Paste a list into the text area, or select **Upload .txt file**. The included `batch-example.txt` shows the format.
3. Select **Generate all PDFs**. Each booking gets a fresh 9-digit ID and a randomly selected hotel from the existing 20 hotels. The selected hotel's nightly rate is used to calculate the total.
4. Use **View PDF**, **Previous**, and **Next** to review the generated confirmations one by one.
5. Download an individual PDF from its card, or select **Download all (.zip)** for the complete batch.

Example:

```text
Imamova Suray
25.10.2026-23.12.2026

KURBANOVA EJEGUL
11.11.26-10.12.26
```

- `DD.MM.YYYY` and `DD.MM.YY` are accepted. Two-digit years mean 2000–2099, so `26` means `2026`.
- All-capital names are automatically formatted: `KURBANOVA EJEGUL` becomes `Kurbanova Ejegul`. Mixed-case names keep their spelling.
- Blank lines are optional. A name and its date range can also be on the same line, separated by a space.
- Each entry creates one PDF. For two guests sharing a confirmation, use a comma between their names. A four-word name in batch mode remains one guest unless a comma is present.
- Invalid dates, departure before arrival, and missing date ranges show the original line number. Fix input errors before generating.
- **Stop** finishes the current PDF and leaves completed PDFs available to preview and download. Errors for individual PDFs are shown on their cards; successful PDFs remain available.
- **Generate again with new IDs** creates new IDs and new random hotel selections for the whole list. Viewing or downloading a completed PDF keeps its assigned ID and hotel.
- Changing the list clears the previous results so downloads always match the current input.
- All parsing, generation, previewing, and ZIP assembly happen locally in the browser. No additional service, build step, or dependency download is needed.

## What it updates

- Booking ID: automatically generated as 9 digits beginning with `0` or `1`
- Client name and matching Guest List name
- Automatic title case for all-capital guest names; an included font supports Turkish and Cyrillic names
- Hotel dropdown containing 20 properties
- Property, Address, and Phone Number update automatically in the PDF without extra visible form fields
- Arrival and departure dates
- The “Cancel before” date in the cancellation policy, automatically matched to the arrival date
- A distinct randomly assigned nightly rate of EUR 50-80 for each hotel
- The arrival date inside the “You will pay…” sentence
- An empty Promotion value

All other content in the source PDF remains unchanged.

## Upload to GitHub using your browser

1. Extract the ZIP file on your computer.
2. Sign in to [GitHub](https://github.com) and select **New repository**.
3. Give the repository a name, such as `booking-pdf-editor`.
4. Choose **Private** unless the source files are intended to be public.
5. Create the repository without adding a README, license, or `.gitignore` because they are already included here.
6. In the empty repository, select **uploading an existing file**.
7. Drag every file and folder from this extracted folder into the GitHub upload area.
8. Select **Commit changes**.

`index.html` must be visible at the top level of the GitHub repository—not inside an additional nested folder.

## Launch on Vercel

1. Sign in to [Vercel](https://vercel.com) using your GitHub account.
2. Select **Add New → Project**.
3. Import the GitHub repository created above.
4. The included `vercel.json` configures the project as a static site with no build or installation command.
5. Select **Deploy**.

Vercel will provide a live URL. Future commits to the repository will automatically create new deployments.

## Privacy and access

The entered guest data and generated PDF stay inside the visitor's browser and are not submitted to an application server.

However, files deployed as a static site—including `assets/booking-template.pdf`—can be accessed by anyone who can reach the deployment. A private GitHub repository does not automatically make the Vercel URL private. Enable Vercel Deployment Protection or another proper access-control layer if this tool is for internal use.

The included page metadata discourages search-engine indexing, but that is not a security control.

## Local preview

From this folder, run:

```bash
python3 -m http.server 8080
```

Then open <http://localhost:8080>.

## Project structure

```text
.
├── assets/
│   └── booking-template.pdf
├── vendor/
│   ├── pdf-lib.min.js
│   └── pdf-lib-LICENSE.md
├── .gitignore
├── app.js
├── booking-utils.js
├── batch-example.txt
├── index.html
├── styles.css
├── vercel.json
└── README.md
```
