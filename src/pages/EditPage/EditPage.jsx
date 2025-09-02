import { useParams } from 'react-router-dom'
import EditForm from './EditForm'

function EditPage({ people, hiredPeople, updateHiredPerson }) {
  const { id } = useParams()

  if (!people) return <p>Loading...</p>

  const person =
    hiredPeople.find(p => p.id?.value === id || p.email === id) ||
    people.find(p => p.id?.value === id || p.email === id)

  if (!person) return <p>Person not found</p>

  return (
    <article>
      <h2>
        {person.name.first} {person.name.last}
      </h2>
      <EditForm person={person} updateHiredPerson={updateHiredPerson} />
    </article>
  )
}

export default EditPage
