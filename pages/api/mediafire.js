// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import axios from "axios";
import * as cheerio from "cheerio";

export default async function handler(req, res) {
  const url = req.body.url;

  if (!url) return res.status(400).json({ message: "Require url" });

  const result = await axios.get(url);
  const $ = cheerio.load(result.data);

  const link = $(".popsok").attr("href");
  const title = $(".filename").text().split(".")[0];
  const size =
    $(".details").children("li").children("span").text().split("B")[0] + "B";

  return res.status(200).json({
    link,
    title,
    size,
  });
}
