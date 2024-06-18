import { useState} from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  let range = ''
  const [counter, setCounter] = useState(0)
  

  function addValue(){
     if (counter<20) {
      setCounter(counter + 1)
     }
  }

  function decreaseValue(){
    if (counter >0) {
      setCounter(counter - 1)
    }
  }
  function resetValue(){
    setCounter(counter*0)
  }
  return (

    <>
      <h1>Uwais Jawed</h1>
      <h2>Counter value : {counter}</h2>
      
      <button
      onClick={addValue}
      >Counter ++</button>
      <br />
      <button
      onClick={decreaseValue}
      >Counter --</button>
      <button
      onClick={resetValue}>Reset Counter</button>
      
    </>
  )
}

export default App
