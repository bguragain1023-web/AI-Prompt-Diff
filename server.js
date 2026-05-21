import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())


const url = "https://api.anthropic.com/v1/messages";

app.post ('/api/compare', async(req, res)=>{
    const {prompt} = req.body

    const response = await fetch (url,{
      method: "POST",
    headers: {
      "Content-Type": "application/json",
      'x-api-key': process.env.ANTHROPIC_API_KEY,
      'anthropic-version': '2023-06-01'

    },
    body: JSON.stringify({
      model: "claude-sonnet-4-5",
      max_tokens: 1000,
      messages: [
        { role: "user", content: prompt }
      ],
    }),
})

const data = await response.json();
res.json(data);
console.log(data)

})

app.listen(3001,()=>console.log('server is running on port 3001'))
console.log('API KEY:', process.env.ANTHROPIC_API_KEY)