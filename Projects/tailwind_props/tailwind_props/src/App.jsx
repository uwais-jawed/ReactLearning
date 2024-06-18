import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  return (
    <>
    <Card username = 'Uwais' btntext = 'visit me'/>
    <Card username = 'Helo' btntext = 'Click me'/>
    <Card username = 'World'/>

    <h1 className='bg-green-400 text-black mt-8 p-9'>Tailwind CSS TEST</h1>
    </>
  )
}

export default App
