// src/components/Search.js
import React from 'react';

const Search = ({ query, handleQueryChange }) => {
  return (
    <div>
      <h4>Find Countires</h4>
      <input
        type="text"
        placeholder="Search for a country..."
        value={query}
        onChange={(e) => handleQueryChange(e.target.value)}
      />
    </div>
  );
};

export default Search;
