import { useState } from 'react'

function HireForm({person, hirePerson}) {
  const [wage, setWage] = useState(0)

  const handleSubmit = (e) => {
  e.preventDefault()
  hirePerson({ ...person, wage }) // now you have wage and person
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
      <button type="submit">Hire</button>  {/* must be type="submit" */}
</form>
  )
}

export default HireForm
