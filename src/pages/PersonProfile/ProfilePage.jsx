import { useParams } from 'react-router-dom'
import HireForm from './components/HireForm'

function ProfilePage({ people, hirePerson }) {
  const { id } = useParams()

  if (!people) return <p>Loading...</p>

  const person = people.find(p => {
    if (p.id?.value) {
      return p.id.value === id
    } else {
      return p.email === id
    }
  })

  if (!person) return <p>Person not found</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <HireForm person={person} hirePerson={hirePerson} />
    </article>
  )
}

export default ProfilePage
