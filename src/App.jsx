import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  
  const [dark, setDark] = useState('True')

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>
      <h1>Ammar</h1>
      <div className="card">
        
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      
    </div>
  )
}

export default App
