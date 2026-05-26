export default async function handler(req, res) {
  const { prompt } = req.body;

  const response = await fetch("https://api.openai.com/v1/responses", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization" : `Bearer ${process.env.OPENAI_API_KEY}`

    },
    body: JSON.stringify({
        model:"gpt-5-nano",
    input:prompt,
     max_output_tokens: 2000,
    }),
  });

  const data = await response.json();
  res.json(data);
}