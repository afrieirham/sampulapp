import { google } from "googleapis";

export const client = new google.auth.JWT(
  process.env.GOOGLE_SHEET_CLIENT_EMAIL,
  null,
  process.env.GOOGLE_SHEET_PRIVATE_KEY,
  ["https://www.googleapis.com/auth/spreadsheets"]
);
