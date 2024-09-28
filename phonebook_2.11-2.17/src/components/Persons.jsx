const Person = ({ person,handleDelete }) => {
    return (
      <li>{person.name} {person.number}
        <button onClick={() => handleDelete(person.id)}>delete</button>
      </li>
    )
  }
  
  const Persons = ({ filteredPersons,handleDelete }) => {
    return (
      <ul>
        {filteredPersons.map((person, index) => (
          <Person key={index} person={person} handleDelete={handleDelete} />
        ))}
      </ul>
    )
  }
  
  export default Persons
  