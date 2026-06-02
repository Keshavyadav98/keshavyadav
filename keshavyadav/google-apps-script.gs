const SHEET_ID = "1kuOMvD9TMGT-Z3yq5kAYtrYPUPl90VBcTnpa0bTgVaE";
const SHEET_NAME = "Sheet1"; // Change if your sheet tab is named differently

function doPost(e) {
  try {
    const data = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getSheetByName(SHEET_NAME);
    if (!sheet) {
      throw new Error(`Sheet not found: ${SHEET_NAME}`);
    }

    sheet.appendRow([
      new Date(),
      data.name || "",
      data.email || "",
      data.subject || "",
      data.message || "",
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ error: error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
