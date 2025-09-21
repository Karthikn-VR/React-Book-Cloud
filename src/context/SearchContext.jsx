import React, { createContext, useState } from 'react';

export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchActive, setIsSearchActive] = useState(false);

  const updateSearchResults = (results, query) => {
    setSearchResults(results);
    setSearchQuery(query);
    setIsSearchActive(true);
  };

  const clearSearch = () => {
    setSearchResults([]);
    setSearchQuery('');
    setIsSearchActive(false);
  };

  return (
    <SearchContext.Provider 
      value={{ 
        searchResults, 
        searchQuery, 
        isSearchActive, 
        updateSearchResults, 
        clearSearch 
      }}
    >
      {children}
    </SearchContext.Provider>
  );
};