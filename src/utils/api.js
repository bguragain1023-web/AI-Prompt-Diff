
const url = process.env.NODE_ENV === "production" 
  ? "/api/compare" 
  : "http://localhost:3001/api/compare";

  const gptUrl = process.env.NODE_ENV ==="production" ? '/api/gpt-5'
  : "http://localhost:3001/api/gpt-5";

export const fetchKeyDifferences = async(responseA, responseB)=>{

    const prompt = `Here are two different responses:
    
    Response A : ${responseA}
    Response B: ${responseB} 
    
    List exactly 3 key differences between these two responses.Be concise. format as :
    1.....
    2.....
    3..... `;
    
    const response = await fetch(url, {
        method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({prompt}),
    })
    const compareData = await response.json();
    return compareData.content[0].text;
}



export const fetchFromClaude = async(prompt)=>{
const response = await fetch (url,{
      method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({prompt}),
})

const data = await response.json();
return {
    text:data.content[0].text,
    token: data.usage.output_tokens,
};
}

export const callOpenAI = async(prompt) =>{

  const response = await fetch (gptUrl,{
    method: "POST",
    headers: {
      "Content-Type" : "application/json",
    
    },
    body: JSON.stringify({prompt})
  });
  const data = await response.json();

const messageOutput = data.output.find(item => item.type === "message");
if (!messageOutput) throw new Error("No message output from GPT");
  return{
    text : messageOutput.content[0].text,
    token: data.usage.output_tokens
  };

}