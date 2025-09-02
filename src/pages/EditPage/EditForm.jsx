import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function EditForm({ person, updateHiredPerson }) {
  const [wage, setWage] = useState(person.wage || 0)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    updateHiredPerson({ ...person, wage })
    navigate('/') 
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Edit Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Submit</button>
    </form>
  )
}

export default EditForm
