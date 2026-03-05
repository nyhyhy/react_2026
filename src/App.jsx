import { useState } from 'react'
import './App.css'
import AppCounter from './AppCounter'
import CourseListCard from './components/course/CourseListCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <main>
        <CourseListCard />
      </main>
    </>
  )
}

export default App
