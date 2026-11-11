import { useState, useEffect } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification.jsx'
import personService from './services/persons'
import './index.css'

const App = () => {

  // Use setPersons as the updater function that React’s useState hook returns for the persons state
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345'},
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 

  const [newName, setNewName] = useState('')        // for storing the user-submitted name
  const [newNumber, setNewNumber] = useState('')    // for storing the user-submitted number
  const [searchTerm, setSearchTerm] = useState('')  // for search filter
  const [showAll, setShowAll] = useState(true)
  const [successMessage, setSuccessMessage] = useState(null)


  // declare effect
    useEffect(() => {
      personService
        .getAll()
        .then(initialPersons => {
          setPersons(initialPersons)
        })
  }, [])

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
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        personService
          .update(exists.id, personObject)
          .then(returnedPerson => {
            setPersons(persons.map(p => p.id !== exists.id ? p : returnedPerson))
            setNewName('')
            setSuccessMessage(`Updated ${returnedPerson.name}`)
            setTimeout(() => {setSuccessMessage(null)}, 2000)
          })
      }
      return
    }

    personService
      .create(personObject)
      .then(
          returnedPerson => {
          setPersons(persons.concat(returnedPerson))
          setNewName('')
          setSuccessMessage(`Added ${returnedPerson.name}`)
          setTimeout(() => {setSuccessMessage(null)}, 2000)
        }
      )

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

  // filter persons with search term
  const personsToShow = showAll 
    ? persons
    : persons.filter(person => person.name.toLowerCase().includes(searchTerm.toLowerCase()))

  // event handler for name search 
  const handleSearch = (event) => {
    setSearchTerm(event.target.value)
    setShowAll(false)
  }

  // event handler for deleting an entry from the phonebook
  const deletePerson = (id, name) => {
    if (!window.confirm(`Delete ${name}?`))
      return

    personService
      .remove(id)
      .then(() => {
        setPersons(persons.filter(p => p.id !== id)) // filter out person with id to be deleted
        setSuccessMessage(`Deleted ${name}`)
        setTimeout(
        () => {
            setSuccessMessage(null)
            },
            2000
        )
      })
      .catch(error => {
        console.log("delete failed", error)
        alert(`Information of ${name} has already been removed from server`)
        setPersons(persons.filter(p => p.id !== id))
      })
  }

  return (
    <div>
      <h2>Phonebook App</h2>

      <Notification message={successMessage} />
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

      <Persons
          persons={personsToShow}
          deletePerson={deletePerson}
      />

    </div>
  )
}

export default App