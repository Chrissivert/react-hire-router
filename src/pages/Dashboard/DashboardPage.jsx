import { Link } from 'react-router-dom'
import './dashboardPage.css'

export default function PeopleList({ people, hiredPeople }) {
  if (!people || people.length === 0) return <p>Loading...</p>

  return (
    <div className="people-container">
      <div className="all-people">
        <h2>All People</h2>
        <ul>
          {people.map(person => (
            <li key={person.id?.value || person.email}>
              <Link to={`/profile/${encodeURIComponent(person.id?.value || person.email)}`}>
                {person.name.first} {person.name.last}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div className="hired-people">
        <h2>Hired People</h2>
        <ul>
          {hiredPeople.map(hiredPerson => (
            <li key={hiredPerson.id?.value || hiredPerson.email}>
              {hiredPerson.name.first} {hiredPerson.name.last}
              <Link
                to={`/edit/${encodeURIComponent(hiredPerson.id?.value || hiredPerson.email)}`}
              >
                <button>Edit</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}
