
import './App.css'
import { Compare } from './components/Compare'
import { Detail } from './components/Detail'
import { Footer } from './components/Footer'
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
<Detail/>
<Footer/>



    </div>
    </>
  )
}

export default App
