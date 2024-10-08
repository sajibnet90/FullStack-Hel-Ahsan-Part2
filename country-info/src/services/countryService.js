// src/services/countryService.js
import axios from 'axios';

const baseUrl = 'https://studies.cs.helsinki.fi/restcountries/api';

const getAllCountries = async () => {
  const response = await axios.get(`${baseUrl}/all`);
  return response.data;
};

const getCountryByName = async (name) => {
    try {
      const response = await axios.get(`${baseUrl}/name/${name}`);
      console.log('Full API Response:', response); // Log full response
      console.log('Fetched country details:', response.data); // Log the data
      return response.data;  // Access `data` directly
    } catch (error) {
      console.error('Error fetching country by name:', error);
      return null;
    }
  };

export default { getAllCountries, getCountryByName };
