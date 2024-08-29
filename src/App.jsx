import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [advice, setadvice] = useState("")

  let getAdvice = async()=>{
    const res = await fetch("https://api.adviceslip.com/advice")
    const data = await res.json()
    setadvice(data.slip.advice)

  }

  useEffect(()=>{
    getAdvice()
  },[])

  return (
    <>
      <div className='myAdvice'>
        <div className='userAdvice'>
          <h5>{advice}</h5>

          <button onClick={getAdvice} className='btn'>Get Advice</button>

        </div>
      </div>
    </>
  )
}

export default App
