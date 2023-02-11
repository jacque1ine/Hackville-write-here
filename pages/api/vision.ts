// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import vision from "@google-cloud/vision";
type Data = {
  detections: any;
};

const client = new vision.ImageAnnotatorClient();

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
    };
    const [result] = await client.textDetection(request);
    const fullTextAnnotation = result.textAnnotations;
    res.status(200).json({ detections: fullTextAnnotation });
  } catch (e: any) {
    res.status(400).json({ detections: e.message });
  }
}
