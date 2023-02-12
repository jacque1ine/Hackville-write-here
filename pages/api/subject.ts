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
  model: 'xlarge',
  prompt: 
  `You are a subject line generator. You summarize emails into maximum 10 words to convey the most important part of them. Ignore any greetings and make sure you summarize the main point of the text. Here are some examples.

  Email: 
  Hi Jackie, 

    I hope you're doing well! It's been a while since I've reached out to you, so I thought I'd check in. How are you? 
  
  Talk soon! 
  Michelle

  Subject: Just checking in
  --
  Email: 
  Dear Annie, 
    
    As the winter break draws closer, I just wanted to wish you and your family a Happy Holidays! Stay warm and enjoy this break. 
  
  Love, 
  Kelly

  Subject: Happy Holidays!
  --
  Email: 
  Good Morning Ms. White, 
  
    I just wanted to let you know that I will be absent this Friday due to a hospital appointment. I'm sorry for any inconveniences this may cause and appreciate your understanding. 
    
  Thanks, 
  Richard

  Subject: Absent this Friday
  --
  Email: 
  Hello Team, 
  
    Just a wanted to give everyone a headsup that we will be having a meeting next Wednesday at 12PM to discuss everyone's progress on the Carrot project. Please mark your calendars.

  Best,
  Harry

  Subject: Meeting Next Wednesday
  --
  Email:
  Hi Lina,
  
    How are you doing? I haven't been able to see you in so long since it's so cold outside. I'm having a birthday party next weekend and was just wondering if you would be interested in attending? It's from 2-8PM at the Great Hall. Let me know!
    
  Regards,
  Michelle
  
  Subject: Birthday Party Next Weekend!
  --
  Email:
  Hello,  

I hope you had a wonderful long weekend. I am reaching out today because in running reports I can see that you have not submitted Assignment 2 to the dropbox. The assignment is due tonight, January 31, at 11:55 PM ET, and is worth 20% of your final grade in PD19. It is very important that you submit this large assignment to help give yourself the best chance of success this term in the course.  

You can check the “Assignment 2 Reminder” announcement on LEARN for tips on how to help you complete this assignment, and as always, if you have any questions please do reach out to the course team at pd19@uwaterloo.ca.  



Have a wonderful rest of your afternoon!  

Ayesha and Ty

  Subject: Assignment 2 Reminder
  --
  Email: 
  Good day,

  I hope you are doing well. I believe I was supposed to receive a payment this past Friday, but I did not receive anything. Would you please check this for me?
  
  Thank you,
  
  Michelle
  
  Subject: Missing payment
  --
  Email: ${JSON.parse(req.body)}
  Subject:}`,
  max_tokens: 10,
  temperature: 0.8,
  end_sequences: ["--"],
  k: 0,
  p: 0.75
});
console.log(response.body.generations[0].text);
res.status(200).json({data: response.body.generations[0].text});


}

