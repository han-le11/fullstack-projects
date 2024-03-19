import { useState } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [newName, setNewName] = useState('') // for storing the user-submitted name
  const [newNumber, setNewNumber] = useState('') // for storing the user-submitted number

  const [searchTerm, setSearchTerm] = useState('') // for search filter
  const [showAll, setShowAll] = useState(true) 

  // event handler for form submission
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
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  // event handler for number change
  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const personsToShow = showAll 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // event handler for name search 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)

    setShowAll(false)
  }

  // event handler for alert display
  const displayAlert = () => {
    console.log("alert displayed")
    alert(`${newName} is already added to phonebook`)
  }

  return (
    <div>
      <h2>Phonebook App</h2>
      <Filter value={searchTerm} onChange={handleSearch}/>

      <h3>Add a new</h3>

      <PersonForm
        handleSubmit={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      
      <h3>Numbers</h3>
      <div>
        {personsToShow.map(person => 
          <Person person={person} key={person.name} number={person.number}/>
        )}
      </div>
    </div>
  )
}

export default App