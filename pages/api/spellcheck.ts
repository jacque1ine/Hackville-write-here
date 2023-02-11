// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import cohere from 'cohere-ai';

type Data = {
  data: any
}

cohere.init('nRvIuSI4yaH2bQojGRHrOriGoYZnIjxNzibJcIHc')

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
const response =  await cohere.generate({
  model: 'medium',
  prompt: 
  `Input: th1s text i5 wrung?
  Output: This text is wrong.

  --

  Input: cOrect Thi s fur me
  Output: Correct this for me.

  --

  Input: w hy ore yoU stopid ,michlle. its literaly s o siMle
  Output: Why are you stupid, Michelle? It's literally so simple.

  --

  Input: hOw ls t he wether tuday i think its realy cold?
  Output: How is the weather today? I think it's really cold.

  --

  Input: i wuld be hapy tu aCcept th1s op portunity? Im glad christine liked the videas please thonk her for m e.I do have tosay I can only speek to my ezperience at CMH if thats alrlght
  Output:`,
  max_tokens: 100,
  temperature: 0.8,
  end_sequences: ["--"],
  k: 0,
  p: 0.75
});
console.log(response.body.generations[0].text);
res.status(200).json({data: response.body.generations[0].text});


}

