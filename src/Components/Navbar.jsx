import React, { useState, useContext, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link, useNavigate } from 'react-router-dom';
import { ThemeContext } from '../context/ThemeContext';
import { SearchContext } from '../context/SearchContext';
import axios from "axios";

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [showResults, setShowResults] = useState(false);
  const [tempResults, setTempResults] = useState([]);
  const { darkMode } = useContext(ThemeContext);
  const { updateSearchResults } = useContext(SearchContext);
  const navigate = useNavigate();
  
  const navLinks = [
  { name: "Home", path: "/" },
  { name: "Genre", path: "/genre" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" }
];

  const handleSearch = async (e) => {
    e.preventDefault();
    if (searchQuery.trim() === "") return;
    
    try {
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=${searchQuery}&maxResults=30`
      );
      const results = response.data.items || [];
      setTempResults(results.slice(0, 5)); // Keep first 5 for dropdown
      setShowResults(true);
      
      // Update global search context with all results
      updateSearchResults(results, searchQuery);
      
      // Navigate to genre page to display results
      navigate('/genre');
    } catch (err) {
      console.error("Error searching books:", err);
    }
  };

  const handleBookClick = (bookId) => {
    setShowResults(false);
    setSearchQuery("");
    navigate('/genre');
  };

  useEffect(() => {
    // Add click outside listener to close search results
    const handleClickOutside = (event) => {
      if (showResults && !event.target.closest('.search-container')) {
        setShowResults(false);
      }
    };
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showResults]);

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top mt-0 mb-1"
      style={{ 
        backgroundColor: "#FFE5D9", 
        boxShadow: "0 2px 6px rgba(0,0,0,0.05)", 
        backdropFilter:'blur(50px)' 
      }}
    >
      <div className="container">
       
        <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
          <i className="bi bi-mortarboard-fill me-2 fs-4 text-dark"></i>
          <span className="text-dark">Book Cloud</span>
        </a>

        
        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        
        <div className="collapse navbar-collapse" id="navbarContent">
         
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0 text-center">
            {navLinks.map((link, index) => (
              <li className="nav-item px-2 my-2 my-lg-0" key={index}>
                <Link
                  to={link.path}
                  className="nav-link fw-medium"
                  style={{
                    color: "#3E2F5B",
                    borderBottom:
                      hoverIndex === index ? "2px solid #3E2F5B" : "2px solid transparent",
                    paddingBottom: "4px",
                    transition: "border-bottom 0.3s ease, color 0.3s ease",
                  }}
                  onMouseEnter={() => setHoverIndex(index)}
                  onMouseLeave={() => setHoverIndex(null)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>

       
          <div className="d-flex flex-column flex-lg-row align-items-center gap-2 mt-3 mt-lg-0">
         
            <div
              className="d-flex align-items-center border border-2 px-2 rounded-pill w-100 position-relative search-container"
              style={{
                backgroundColor: "transparent",
                height: "38px",
                transition: "background-color 0.3s ease",
                maxWidth: "100%",
                width: "100%"
              }}
            >
              <form onSubmit={handleSearch} className="d-flex w-100">
                <input
                  type="text"
                  placeholder="Search"
                  className="form-control border-0 text-dark bg-transparent"
                  style={{
                    width: "100%",
                    fontSize: "0.85rem",
                    outline: "none",
                    boxShadow: "none",
                    padding: "0.25rem 0.5rem"
                  }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit" className="btn bi bi-search text-dark p-0" style={{border:'none', minWidth: "30px"}}></button>
              </form>
              
              {showResults && tempResults.length > 0 && (
                <div className="position-absolute top-100 start-0 mt-1 w-100 bg-white shadow-lg rounded-3 z-3" style={{ zIndex: 1000 }}>
                  {tempResults.map((book) => (
                    <div 
                      key={book.id} 
                      className="p-2 border-bottom d-flex align-items-center cursor-pointer hover-bg-light"
                      onClick={() => handleBookClick(book.id)}
                      style={{ cursor: 'pointer' }}
                    >
                      <img 
                        src={book.volumeInfo.imageLinks?.thumbnail || "https://via.placeholder.com/40x60?text=No+Image"} 
                        alt={book.volumeInfo.title}
                        style={{ width: '40px', height: '60px', objectFit: 'cover', marginRight: '10px' }}
                      />
                      <div>
                        <div className="fw-bold text-truncate" style={{ maxWidth: '200px' }}>{book.volumeInfo.title}</div>
                        <small className="text-muted">{book.volumeInfo.authors?.[0] || 'Unknown Author'}</small>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
