import { useState,useEffect} from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/personsService';
import Notification from './components/Notification';
import Error from './components/Error';




const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [searchQuery, setSearchQuery] = useState('')
  const [notification, setNotification] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);



  // Fetch the initial list of persons from db.json
  useEffect(() => {
    personsService
      .getAll()
      .then(data => { // The returned value from getAll is already the data
        setPersons(data); // Set persons with the fetched data
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  
  
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
// Filter persons based on search query (case-insensitive)
const filteredPersons = persons.filter(person =>   
  person && person.name && person.name.toLowerCase().includes(searchQuery.toLowerCase())
);

  // handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const existingPerson = persons.find(person => person.name === newName);
    
    // Clear any existing error messages
    setErrorMessage(null);
  
    if (existingPerson) {
      if (window.confirm(`${existingPerson.name} is already in the phonebook. Replace the old number with a new one?`)) {
        const updatedPerson = { ...existingPerson, number: newNumber };
  
        personsService
          .update(existingPerson.id, updatedPerson)
          .then(updatedPersonData => {
            setPersons(persons.map(person => person.id !== existingPerson.id ? person : updatedPersonData));
            setNewName('');
            setNewNumber('');
            // Notification for success
            setNotification(`Updated ${existingPerson.name}'s number!`);
            setTimeout(() => {
              setNotification(null);
            }, 5000);
          })
          .catch(error => {
            console.error('Error updating person:', error);
            // Set error message only if there's an error
            setErrorMessage(`Error updating ${existingPerson.name}: ${error.response ? error.response.data.error : 'Unknown error'}`);
            setTimeout(() => {
              setErrorMessage(null);
            }, 5000);
          });
      }
    } else {
      const newPerson = { name: newName, number: newNumber };
      personsService
        .create(newPerson)
        .then(newPersonData => {
          setPersons(persons.concat(newPersonData));
          setNewName('');
          setNewNumber('');
          
          // Notification for success
          setNotification(`Added ${newPerson.name}!`);
          setTimeout(() => {
            setNotification(null);
          }, 5000); // Clear notification after 5 seconds
        })
        .catch(error => {
          console.error('Error adding person:', error);
          // Set error message only if there's an error
          setErrorMessage(`Error adding person ${newPerson.name}: ${error.response ? error.response.data.error : 'Unknown error'}`);
          setTimeout(() => {
            setErrorMessage(null);
          }, 5000);
        });
    }
  };
  
  
  const handleDelete = (id) => {
    const person = persons.find(p => p.id === id);
    if (window.confirm(`Delete ${person.name}?`)) {
      personsService
        .remove(id)
        .then(() => {
          setPersons(persons.filter(p => p.id !== id));
          
          setNotification(`Deleted ${person.name}`);
          setTimeout(() => {
            setNotification(null);
          }, 5000);
        })
        .catch(error => {
          alert(`The person '${person.name}' was already deleted from server`);
          setPersons(persons.filter(p => p.id !== id));
        });
    }
  };
  


  return (
    <div>
      <h2>Phonebook</h2>

      <Notification message={notification} />
      <Error message={errorMessage} />

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
      <Persons filteredPersons={filteredPersons} handleDelete={handleDelete} />
      </div>
  )
}

export default App