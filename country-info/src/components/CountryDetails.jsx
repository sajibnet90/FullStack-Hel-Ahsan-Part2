// src/components/CountryDetails.jsx
import React from 'react';

const CountryDetails = ({ country }) => {
  return (
    <div>
      <h2>{country.name.common}</h2>
      <p><strong>Capital:</strong> {country.capital[0]}</p>
      <p><strong>Area:</strong> {country.area} km²</p>
      <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
      <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
    </div>
  );
};

export default CountryDetails;
