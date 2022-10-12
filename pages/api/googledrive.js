import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const url = req.body.url;

  if (!url) return res.status(400).json({ message: "Require url" });

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);

  const link = $("#downloadForm").attr("action");
  const title = $(".uc-name-size").text();

  return res.status(200).json({
    link,
    title,
  });
}
