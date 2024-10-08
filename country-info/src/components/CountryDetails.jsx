// src/components/CountryDetails.jsx


import React from 'react';
import Weather from './Weather';

const CountryDetails = ({ country }) => {
  if (!country) return null;

  const { name, capital, area, languages, flags } = country;

  return (
    <div>
      <h2>{name.common}</h2>
      <img src={flags.png} alt={`Flag of ${name.common}`} />
      <p>Capital: {capital[0]}</p>
      <p>Area: {area} km²</p>
      <p>Languages: {Object.values(languages).join(', ')}</p>
      <Weather capital={capital[0]} />
    </div>
  );
};

export default CountryDetails;


// import React from 'react';

// const CountryDetails = ({ country }) => {
//   return (
//     <div>
//       <h2>{country.name.common}</h2>
//       <p><strong>Capital:</strong> {country.capital[0]}</p>
//       <p><strong>Area:</strong> {country.area} km²</p>
//       <p><strong>Languages:</strong> {Object.values(country.languages).join(', ')}</p>
//       <img src={country.flags.png} alt={`Flag of ${country.name.common}`} width="100" />
//     </div>
//   );
// };

// export default CountryDetails;