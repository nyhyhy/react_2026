import { useState } from 'react'
import './App.css'
import AppCounter from './AppCounter'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <img src='/img/htmlcss.png' />
      <AppCounter />
    </>
  )
}

export default App
