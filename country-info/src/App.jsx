import React, { useState, useEffect } from 'react';
import countryService from './services/countryService';
import CountryList from './components/CountryList';
import Search from './components/Search';
import CountryDetails from './components/CountryDetails';

function App() {
  const [countries, setCountries] = useState([]);           // All countries
  const [filteredCountries, setFilteredCountries] = useState([]); // Filtered countries based on search
  const [query, setQuery] = useState('');                   // Search query state
  const [selectedCountry, setSelectedCountry] = useState(null); // Selected country for details view

  // Fetch all countries when the app loads
  useEffect(() => {
    countryService.getAllCountries().then((data) => {
      setCountries(data);
    });
  }, []);

  // Update search query and filter the country list
  const handleQueryChange = (searchQuery) => {
    setQuery(searchQuery);
    const filtered = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredCountries(filtered);
    setSelectedCountry(null); // Reset selected country when query changes
  };

  const handleShowCountry = (country) => {
    setSelectedCountry(country); // Set the selected country for detailed view
  };

  return (
    <div>
      <h1>Country Information</h1>
      <Search query={query} handleQueryChange={handleQueryChange} />
      
      {query && (
        <>
          {filteredCountries.length > 10 ? (
            <p>Too many matches, specify another filter</p>
          ) : filteredCountries.length > 1 ? (
            <CountryList 
              countries={filteredCountries} 
              handleShowCountry={handleShowCountry} 
            />
          ) : filteredCountries.length === 1 ? (
            <CountryDetails country={filteredCountries[0]} />
          ) : (
            <p>No matches found</p>
          )}
        </>
      )}
      
      {/* Render country details if a country has been selected */}
      {selectedCountry && (
        <CountryDetails country={selectedCountry} />
      )}
    </div>
  );
}

export default App;
