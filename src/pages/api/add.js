import { google } from "googleapis";
import { client } from "../../libs/spreadsheet";

export default async function handler(req, res) {
  const { body } = req;
  const { title, amount, budget, account } = body;

  const sheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = process.env.GOOGLE_SHEET_SPREADSHEET_ID;

  sheets.spreadsheets.values.append({
    spreadsheetId: spreadsheetId,
    range: "Transactions!A1:E1",
    valueInputOption: "RAW",
    resource: {
      values: [[new Date(), title, Number(amount), budget, account]],
    },
  });

  res.status(200).json({ msg: "transaction added" });
}
