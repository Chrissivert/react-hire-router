import { Routes, Route, Link, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import './App.css'
import Dashboard from './pages/Dashboard/DashboardPage'
import ProfilePage from './pages/PersonProfile/ProfilePage'
import EditPage from './pages/EditPage/EditPage'

export default function App() {
  const [person, setPerson] = useState([])
  const [hiredPeople, setHiredPeople] = useState([])

  console.log("App")
  console.log(person)
  console.log(hiredPeople)


  useEffect(() => {
    const storedPeople = localStorage.getItem('people')
    if (storedPeople) {
      setPerson(JSON.parse(storedPeople))
    } else {
      fetch('https://randomuser.me/api/?results=50')
        .then(res => res.json())
        .then(data => {
          setPerson(data.results)
          localStorage.setItem('people', JSON.stringify(data.results))
        })
    }
  }, [])

  const navigate = useNavigate()

  const hirePerson = (person) => {
  if (hiredPeople.some(p => p.id?.value === person.id?.value || p.email === person.email)) return
  setHiredPeople(prev => [...prev, person])
  navigate('/')
}

const updateHiredPerson = (updatedPerson) => {
  setHiredPeople(prev =>
    prev.map(p =>
      p.id?.value === updatedPerson.id?.value || p.email === updatedPerson.email
        ? updatedPerson
        : p
    )
  )
}


  return (
    <>
      <header>
        <h1>Hire Your Team</h1>
      </header>

      <Routes>
        <Route path="/" element={<Dashboard people={person} hiredPeople={hiredPeople} />} />
        <Route path="/profile/:id" element={<ProfilePage
        people={person}
        hirePerson={hirePerson}
      />} />
        <Route path="/edit/:id" element={<EditPage
      people={person}
      hiredPeople={hiredPeople}
      updateHiredPerson={updateHiredPerson}
    />} />

      </Routes>
    </>
  )
}
