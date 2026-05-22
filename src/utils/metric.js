
// get length

export const getLength = (text) => {
    return text.trim().split(/\s+/).filter(Boolean).length;

}

//get clarity 

export const getClarity = (text)=>{
    const sentences = text.split(/[.!?]+/).filter(Boolean);
    const words= text.trim().split(/\s+/).filter(Boolean).length;
    const averageWord = words / sentences.length;
    return Math.max(0, Math.min(100,Math.round(100 - averageWord*2)));
}


