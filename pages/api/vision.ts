// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import vision from "@google-cloud/vision";
type Data = {
  detections: any;
};
  const CONFIG = {
    credentials: {
      private_key: process.env.NEXT_PUBLIC_PRIVATE_KEY,
      client_email: process.env.NEXT_PUBLIC_GC_CLIENT_EMAIL

    }
  }
const client = new vision.ImageAnnotatorClient(CONFIG);

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {

  try {
    const imgData = JSON.parse(req.body);
    const request = {
      image: {
        content: Buffer.from(imgData, "base64"),
      },
      imageContext :{
        languageHints: ["en-t-i0-handwrit"]
      }
    };

    const [result] = await client.documentTextDetection(request);
    const fullTextAnnotation = result.textAnnotations;
    res.status(200).json({ detections: fullTextAnnotation });
  } catch (e: any) {
    res.status(400).json({ detections: e.message });
  }
}
