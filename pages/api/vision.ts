// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import vision from '@google-cloud/vision'
type Data = {
  detections: Object,
}

const client = new vision.ImageAnnotatorClient();

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    try{
    const [result] = await client.textDetection("public/wakeupcat.jpg");
    const detections = result.textAnnotations;
    console.log('Text:');
    console.log(detections && detections[0]);
    if (detections){
        res.status(200).json({detections});
    }
    }
    catch(e){
    res.status(400);
    }
    

}
