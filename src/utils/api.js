


export const fetchFromClaude = async(prompt)=>{
    const url = "http://localhost:3001/api/compare";

const response = await fetch (url,{
      method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({prompt}),
})

const data = await response.json();
console.log(data)
return {
    text:data.content[0].text,
    token: data.usage.output_tokens,
};
}