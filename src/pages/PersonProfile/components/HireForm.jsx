import { useState } from 'react'

function HireForm({person, hirePerson}) {
  const [wage, setWage] = useState(person.wage)
  console.log("Hireform")
  console.log(person)

  const handleSubmit = (e) => {
  e.preventDefault()
  hirePerson({ ...person, wage })
}

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="wage">Wage Offer</label>
      <input
        type="text"
        id="wage"
        name="wage"
        onChange={e => setWage(e.target.value)}
        value={wage}
      />
      <button type="submit">Hire</button>
</form>
  )
}

export default HireForm
