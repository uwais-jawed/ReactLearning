import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState("")

  return (
    <div className="h-screen w-full" style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl'>
          <button
          onClick={()=> setColor("red")}
          className='outline-none px-4 py-4 rounded-md shadow-sm text-zinc-50' style={{backgroundColor :"red"}}>RED</button>

          <button 
          onClick={()=> setColor("green")}
          className='outline-none px-4 py-4 rounded-md shadow-sm text-zinc-50' style={{backgroundColor :"green"}}>GREEN</button>

          <button 
          onClick={()=> setColor("blue")}
          className='outline-none px-4 py-4 rounded-md shadow-sm text-zinc-50' style={{backgroundColor :"blue"}}>BLUE</button>

          <button 
          onClick={()=> setColor("black")}
          className='outline-none px-4 py-4 rounded-md shadow-sm text-zinc-50 ' style={{backgroundColor :"black"}}>BLACK</button>
          
        </div>
      </div>
    </div>
  )
}

export default App
