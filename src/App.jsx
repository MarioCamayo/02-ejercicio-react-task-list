import { useState } from 'react'
 
import './App.css'
import { GetUsersRobots } from './01-ejercicio-array/components/GetUsersRobots'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <GetUsersRobots />
    </>
  )
}

export default App
