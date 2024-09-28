import axios from 'axios';

const baseUrl = 'http://localhost:3001/persons';

// Fetch all persons
const getAll = () => {
  const request = axios.get(baseUrl);
  return request.then(response => response.data);
};

// Create a new person
const create = (newPerson) => {
  const request = axios.post(baseUrl, newPerson);
  return request.then(response => response.data); // Return the data directly
};

// Update an existing person's number
const update = (id, updatedPerson) => {
  const request = axios.put(`${baseUrl}/${id}`, updatedPerson);
  return request.then(response => response.data); // Return the updated person data
};

// Delete a person
const remove = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`);
  return request.then(response => response.data); //  person to delete by id 
};

export default { getAll, create, update, remove };
