export default async function handler(req, res) {
  res.json({ status: req?.query?.key === process.env.ADMIN_APP_KEY });
}
