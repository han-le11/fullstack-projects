import { useState } from 'react'
import Person from './components/Person'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('') // for storing the user-submitted name
  const [newNumber, setNewNumber] = useState('') // for storing the user-submitted number

  // event handler for form submission of name
  const addPerson = (event) => {
    event.preventDefault()  // prevents the default action of submitting a form, e.g., reloading page
    console.log('button clicked', event.target)

    const personObject = {
      name: newName,
      number: newNumber,
    }
    const exists = persons.find(p => p.name === newName)
    if (exists) {
      displayAlert()
      return
    }

    setPersons(persons.concat(personObject)) // creates a new copy of the array with the new item concatenated
    setNewName('') // resets the value
    setNewNumber('') 
  }

  // event handler for name change
  const handleChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // event handler for number change
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  // event handler for alert display
  const displayAlert = () => {
    console.log("alert displayed")
    alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h1>Phonebook App</h1>
      <form onSubmit={addPerson}>
        <div>Name: <input value={newName} onChange={handleChange}/></div>
        <br></br>
        <div>Number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <br></br>
        <div>
          <button type="submit">add</button>
        </div>
      </form>

      <h2>Numbers</h2>
      <div>
        {console.log("current list", persons)}
        {persons.map(p => 
          <Person person={p} key={p.name} number={p.number}/>
        )}
      </div>
      
    </div>
  )
}

export default App