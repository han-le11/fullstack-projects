import { useState } from 'react'
import Person from './components/Person'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [newName, setNewName] = useState('') // controlled component for storing the user-submitted input
  
  // event handler, parameter event triggers the function addName
  const addName = (event) => {
    event.preventDefault()  // prevents the default action of submitting a form, e.g., reloading page
    console.log('button clicked', event.target)

    const personObject = {
      name: newName,
    }

    setPersons(persons.concat(personObject)) // creates a new copy of the array with the new item concatenated
    setNewName('') // resets the value
  }

  // event handler for input change
  const handleChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>
          name: <input 
                  value={newName}
                  onChange={handleChange}
                />
        </div>
        <br></br>
        <div>
          <button onClick={addName} type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {console.log("current list", persons)}
        <ul>
          {persons.map(p => 
            <Person person={p} key={p.name}/>
          )}
        </ul>
      </div>
      
    </div>
  )
}

export default App