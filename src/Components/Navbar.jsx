import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from 'react-router-dom'

export default function Navbar() {
  const [hoverIndex, setHoverIndex] = useState(null);
  const navLinks = [
  { name: "Home", path: "/" },
  { name: "Genre", path: "/genre" },
  { name: "Features", path: "/features" },
  { name: "About", path: "/about" }
];

  return (
    <nav
      className="navbar navbar-expand-lg sticky-top mt-0 bg-transparent mb-1"
      style={{ backgroundColor: "#FFE5D9", boxShadow: "0 2px 6px rgba(0,0,0,0.05)",backdropFilter:'blur(50px)' }}
    >
      <div className="container-fluid">
       
        <a className="navbar-brand d-flex align-items-center fw-bold" href="#">
          <i className="bi bi-mortarboard-fill me-2 fs-4 text-dark"></i>
          Book Cloud
        </a>

        
        <button
          className="navbar-toggler"
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
         
          <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
            {navLinks.map((link, index) => (
              <li className="nav-item px-2" key={index}>
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

       
          <div className="d-flex align-items-center gap-3">
         
            <div
              className="d-flex align-items-center border border-2 px-3 rounded-pill"
              style={{
                backgroundColor: "transparent",
                height: "38px",
                transition: "background-color 0.3s ease",
              }}
            >
              <input
                type="text"
                placeholder="Search"
                className="form-control border-0 text-dark bg-transparent"
                style={{
                  width: "130px",
                  fontSize: "0.9rem",
                  outline: "none",
                  boxShadow: "none",
                }}
              />
              <i className="btn bi bi-search text-dark ms-2" style={{border:'none'}}></i>
            </div>

           
            <i className="btn btn-outline-light bi bi-moon fs-5 text-dark" role="button"></i>
          </div>
        </div>
      </div>
    </nav>
  );
}
