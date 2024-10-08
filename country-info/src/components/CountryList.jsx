// src/components/CountryList.jsx
import React from 'react';

const CountryList = ({ countries, handleShowCountry }) => {
  return (
    <ul>
      {countries.map((country) => (
        <li key={country.cca3}>
          {country.name.common} 
          <button onClick={() => handleShowCountry(country)}>Show</button>
        </li>
      ))}
    </ul>
  );
};

export default CountryList;
