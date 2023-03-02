import { google } from "googleapis";

export default async function handler(req, res) {
  const { budget } = req?.query;
  const client = new google.auth.JWT(
    process.env.GOOGLE_SHEET_CLIENT_EMAIL,
    null,
    process.env.GOOGLE_SHEET_PRIVATE_KEY,
    ["https://www.googleapis.com/auth/spreadsheets.readonly"]
  );

  client.authorize((err) => {
    if (err) {
      console.log(err);
      return res.status(500).json({ msg: "cant authorize  sheet api", err });
    } else {
      console.log("Successfully connected to Google Sheets API");
    }
  });

  const sheets = google.sheets({ version: "v4", auth: client });
  const spreadsheetId = process.env.GOOGLE_SHEET_SPREADSHEET_ID;
  const range = "Transactions!A1:E";

  const { data } = await sheets.spreadsheets.values.get({
    spreadsheetId,
    range,
  });

  const formatted = data.values
    .filter((_, i) => i !== 0)
    .map((r) => ({
      timestamp: r[0],
      notes: r[1],
      amount: Number(r[2].replace(",", "")),
      budget: r[3],
      account: r[4],
    }));

  res.status(200).json({ values: formatted });
}
