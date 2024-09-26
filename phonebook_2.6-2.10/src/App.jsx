import { useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')



  // handle input changes for the name
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  // handle input changes for the number
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
 // Function to handle input changes for the search
 const handleSearchChange = (e) => {
  setSearchQuery(e.target.value)
}


  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault() // Prevent page refresh on form submission
    // Check if the name already exists
    const nameExists = persons.some(person => person.name === newName)

    if (nameExists) {
      alert(`${newName} is already added to phonebook`)
    } else {
      const newPerson = { name: newName, number: newNumber }
      setPersons(persons.concat(newPerson))
      setNewName('') // Reset the name input field
      setNewNumber('') // Reset the number input field
    }
  }

  // Filter persons based on search query (case-insensitive)
  const filteredPersons = persons.filter(person =>
    person.name.toLowerCase().includes(searchQuery.toLowerCase())
  )


  return (
    <div>
      <h2>Phonebook</h2>
      
      <div>
      {/* Search Filter */}
      <Filter searchQuery={searchQuery} handleSearchChange={handleSearchChange} />
      </div>
      
      <h3>Add a new</h3>

      {/* Form to add new person */}
      <PersonForm 
        newName={newName}
        newNumber={newNumber}
        handleNameChange={handleNameChange}
        handleNumberChange={handleNumberChange}
        handleSubmit={handleSubmit}
      />
      
      <h3>Numbers</h3>
      {/* List of persons */}
      <Persons filteredPersons={filteredPersons} />
    </div>
  )
}

export default App