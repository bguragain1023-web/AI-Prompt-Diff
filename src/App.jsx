
import { useState } from 'react'
import { fetchFromClaude } from './utils/api';
import './App.css'
import { Compare } from './components/Compare'
import { Detail } from './components/Detail'
import { Footer } from './components/Footer'
import { Hero } from './components/Hero'
import { Input } from './components/Input'
import { Navbar } from './components/Navbar'

function App() {
   const [promptA, setPromptA] = useState("");
  const [promptB, setPromptB] = useState("");
  const [results, setResults] = useState(null)
  const [loading, setLoading] = useState(false)

  const canRun = promptA.trim().length > 0 && promptB.trim().length > 0;

const handleOnRun = async() =>{
setLoading(true)
try {
    const [resultA, resultB] = await Promise.all([
        fetchFromClaude(promptA),
        fetchFromClaude(promptB),
    ])
    setResults({a:resultA, b:resultB});
} catch (error) {
    console.log(error)
} finally{
    setLoading(false)
}

    
}
  return (
    <>
    <div className="wrapper">

<Navbar/>
<Hero/>
<Input 
promptA={promptA}
promptB={promptB}
setPromptA={setPromptA}
setPromptB={setPromptB}
canRun={canRun}
loading={loading}
handleOnRun={handleOnRun}
 />
<Compare results={results} loading={loading}/>
<Detail/>
<Footer/>



    </div>
    </>
  )
}

export default App
