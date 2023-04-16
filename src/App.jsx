import { useState } from 'react'
import Header from './components/header/Header'
import reactLogo from './assets/react.svg'
import Meme from './components/meme/Meme'
import Footer from './components/footer/Footer'
import './App.css'

function App() {
  
  const [dark, setDark] = useState('True')

  return (
    <div className="App">
      
      <Header/>
      <Meme/>
      <Footer/>
      
    </div>
  )
}

export default App
