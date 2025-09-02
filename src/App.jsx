import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/DashboardPage'
import ProfilePage from './pages/PersonProfile/ProfilePage'

export default function App() {
  const [randomPeople, setPeople] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])


  useEffect(() => {
    const storedPeople = localStorage.getItem('people')
    if (storedPeople) {
      setPeople(JSON.parse(storedPeople))
    } else {
      fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => {
          setPeople(data.results)
          localStorage.setItem('people', JSON.stringify(data.results)) // save to localStorage
        })
    }
  }, [])

  const navigate = useNavigate()

  const hirePerson = (person) => {
    setHiredPeople(prev => [...prev, person])
    navigate('/') 
  }

  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard people={randomPeople} hiredPeople={hiredPeople} />} />
        <Route path="/profile/:id" element={<ProfilePage
        people={randomPeople}
        hirePerson={hirePerson}
      />} />
      </Routes>
    </>
  )
}
