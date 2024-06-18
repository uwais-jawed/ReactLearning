import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  [current, changColor] = useState('black')

  function changeColor(){
    const body = document.querySelector(body)
    body.setAttribute('backgroundColor','current')
  }

  return (
    <>
    <button onClick={changeColor}>'Color change'</button>
    </>
  )
}

export default App
