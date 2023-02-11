// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import vision from '@google-cloud/vision'
type Data = {
  detections: object,
}

const client = new vision.ImageAnnotatorClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try{
    const [result] = await client.textDetection("public/detect_handwriting_OCR-detect-handwriting_SMALL.png");
    const detections = result.textAnnotations;
    if (detections){
        res.status(200).json({detections: detections});
    }
    }
    catch(e){
    res.status(400);
    }
    

}
