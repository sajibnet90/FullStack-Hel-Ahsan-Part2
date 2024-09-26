const Person = ({ person }) => {
    return (
      <li>{person.name} {person.number}</li>
    )
  }
  
  const Persons = ({ filteredPersons }) => {
    return (
      <ul>
        {filteredPersons.map((person, index) => (
          <Person key={index} person={person} />
        ))}
      </ul>
    )
  }
  
  export default Persons
  