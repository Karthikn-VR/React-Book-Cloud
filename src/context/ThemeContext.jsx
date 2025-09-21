import React, { createContext } from 'react';

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  // Simplified context with no theme toggle functionality
  // Always using light theme
  const darkMode = false;

  return (
    <ThemeContext.Provider value={{ darkMode }}>
      {children}
    </ThemeContext.Provider>
  );
};