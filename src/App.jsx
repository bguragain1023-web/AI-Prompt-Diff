
import './App.css'
import { Compare } from './components/Compare'
import { Hero } from './components/Hero'
import { Input } from './components/Input'
import { Navbar } from './components/Navbar'

function App() {


  return (
    <>
    <div className="wrapper">

<Navbar/>
<Hero/>
<Input/>
<Compare/>


    </div>
    </>
  )
}

export default App
