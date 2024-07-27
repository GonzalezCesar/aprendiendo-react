import { useEffect, useState } from 'react'
import './App.css'
import { User } from './type'

function App() {
  const [users, setUsers] = useState<User[]>([])

  useEffect(() => {
    fetch('https://randomuser.me/api?results=100')
      .then(async res => await res.json())
      .then(res => {
        setUsers(res.results)
      })
      
  }, [])

  return (
    <div>
      <h1>Prueba tecnica</h1>
      {
        JSON.stringify(users)
      }
    </div>
  )
}

export default App
