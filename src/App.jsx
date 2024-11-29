import { useState } from 'react'
import './App.css'

function App() {
  const [bg, setbg] = useState('#ffffff')

  return (
    <>
    <div style={{ backgroundColor: bg, height: '100vh', textAlign: 'center' }}>
    <h1>{bg}</h1>
    <input type='color' onChange={(e)=>setbg(e.target.value)}/>
    </div>
  
    
    </>
  )
}

export default App
