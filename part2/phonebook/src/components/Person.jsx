// This component displays a single person (their name and number) and a delete button
import React from 'react'

const Person = ({ person, deletePerson }) => {
    return (
      <p>
          {person.name} {person.number}
          <button onClick={() => deletePerson(person.id, person.name)}>delete</button>
      </p>

    )
}

// render the button


export default Person