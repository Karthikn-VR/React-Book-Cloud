import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./Components/HomePage";
import Genre from "./Pages/Genre";
import Features from "./Pages/Features";
import AboutUs from "./Pages/AboutUs";
import { ThemeProvider } from "./context/ThemeContext";
import { SearchProvider } from "./context/SearchContext";
import "./App.css";
function App() {
  return (
    <ThemeProvider>
      <SearchProvider>
        <Router>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/genre" element={<Genre />} />
            <Route path="/features" element={<Features />} />
            <Route path="/about" element={<AboutUs />} />
          </Routes>
        </Router>
      </SearchProvider>
    </ThemeProvider>
  );
}

export default App;
