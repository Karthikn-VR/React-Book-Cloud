import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Aboutus from "./Pages/AboutUs";
import Features from "./Pages/Features";
// import Aboutus from "./Pages/AboutUs";
import HomePage from "./Components/HomePage";
import Genre from './Pages/Genre'
function App() {
  return (
    <Router>
   
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/genre" element={<Genre />} />
        <Route path="/features" element={<Features />} />
        <Route path="/about" element={<Aboutus />} />
      </Routes>
    </Router>
  );
}

export default App;
