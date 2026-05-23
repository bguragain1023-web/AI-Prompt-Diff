
const url = "http://localhost:3001/api/compare";

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
console.log(data)
return {
    text:data.content[0].text,
    token: data.usage.output_tokens,
};
}