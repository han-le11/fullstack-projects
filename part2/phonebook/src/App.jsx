import { useState } from 'react'
import Person from './components/Person'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas" }
  ]) 
  const [newName, setNewName] = useState('') // controlled component for storing the user-submitted input
  const [showAlert, setAlert] = useState(false) // controlled component for displaying an alert 

  // event handler for form submission
  const addName = (event) => {
    event.preventDefault()  // prevents the default action of submitting a form, e.g., reloading page
    console.log('button clicked', event.target)

    const personObject = {
      name: newName,
    }
    const exists = persons.find(p => p.name === newName)
    if (exists) {
      displayAlert()
      return
    }

    setPersons(persons.concat(personObject)) // creates a new copy of the array with the new item concatenated
    setNewName('') // resets the value
  }

  // event handler for input change
  const handleChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // event handler for alert display
  const displayAlert = () => {
    console.log("alert displayed")
    setAlert(true)
    alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h1>Phonebook App</h1>
      <form onSubmit={addName}>
        <div>
          Name: <input 
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
        {persons.map(p => 
          <Person person={p} key={p.name}/>
        )}
      </div>
      
    </div>
  )
}

export default App