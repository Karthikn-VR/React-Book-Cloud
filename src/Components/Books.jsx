import React, { useEffect, useState } from "react";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
import horror from "./Genre/Horror.png";
import crime from "./Genre/Crime.png";
import Fantasy from './Genre/Fantasy.png';
import mystry from './Genre/mistery.png';
import romance from "./Genre/romance.png";
import historical from "./Genre/history.png";
import scifi from "./Genre/sci-fi.png";
import adv from "./Genre/Travel.png";
import '../App.css'

export default function Books() {
  const [books, setBooks] = useState([]);
  const [pages, setPages] = useState(0);
  const maxResults = 6;

const genres = [
  { name: "Fantasy", image: Fantasy, bg: "#FF9A8B, #FF6A88" },          
  { name: "Science Fiction", image: scifi, bg: "#3A7BD5, #00D2FF" },     
  { name: "Mystery", image: mystry, bg: "#6D597A, #B56576" },            
  { name: "Romance", image: romance, bg: "#FF758F, #FF7EB3" },         
  { name: "Historical", image: historical, bg: "#B5B682, #C6AD8F" },    
  { name: "Horror", image: horror, bg: "#2C2C2C, #4F4F4F" },             
  { name: "Crime", image: crime, bg: "#D7263D, #721121" },             
  { name: "Adventure", image: adv, bg: "#11998E, #38EF7D" },            
];


  const FetchBooks = async () => {
    try {
      const startIndex = pages * maxResults;
      const response = await axios.get(
        `https://www.googleapis.com/books/v1/volumes?q=most+popular+fiction&startIndex=${startIndex}&maxResults=${maxResults}`
      );
      const data = response.data;
      setBooks(data.items || []);
    } catch (err) {
      console.error("Error Fetching Books ", err);
    }
  };

  useEffect(() => {
    FetchBooks();
  }, [pages]);

  return (
    <div className="container my-4" style={{ backgroundColor: "#F8F4F0", borderRadius: "12px" }}>
      <h2 className="mb-4 fw-bold" style={{ color: "#3E2F5B"}}>Popular Books</h2>
      <div className="row">
        {books.map((book, index) => {
          const info = book.volumeInfo;
          return (
            <div className="col-md-2 d-flex flex-column mb-4" key={index}>
              <div className="card h-100 d-flex flex-column border-0 shadow" style={{ width: '100%', maxWidth: '14rem', borderRadius: "10px" }}>
                <img
                  src={
                    info.imageLinks?.thumbnail?.replace("http://", "https://") ||
                    "https://via.placeholder.com/128x193?text=No+Image"
                  }
                  className="card-img-top p-2"
                  alt={info.title}
                  style={{
                    height: "183px",
                    width: "115px",
                    color:'Highlight' ,
                    objectFit: "contain",
                    alignSelf: "center"
                  }}
                />
                <div className="card-body">
                  <h6 className="card-title text-truncate" title={info.title}>
                    {info.title}
                  </h6>
                  <p className="card-text" style={{ fontSize: '0.8rem' }}>
                    <strong>Author:</strong> {info.authors?.[0] || "Unknown"}
                  </p>
                  <a
                    href={info.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm w-100 mt-auto"
                    style={{
                      backgroundColor: "#6D597A",
                      color: "#fff",
                      fontWeight: "500",
                      borderRadius: "6px",
                      border: "none"
                    }}
                  >
                    View
                  </a>
                </div>
              </div>
            </div>
          );
        })}
      </div>

   
      <div className="d-flex justify-content-between mt-4">
        <button
          className="btn"
          onClick={() => setPages(prev => Math.max(prev - 1, 0))}
          style={{ backgroundColor: "#E4C1F9", color: "#3E2F5B", fontWeight: 500 }}
        >
          Previous
        </button>
        <button
          className="btn"
          onClick={() => setPages(prev => prev + 1)}
          style={{ backgroundColor: "#CDB4DB", color: "#3E2F5B", fontWeight: 500 }}
        >
          Next
        </button>
      </div>

     
      <div className="container py-4">
        <h2 className="mb-4 fw-bold" style={{ color: "#3E2F5B" }}>Explore Book Genres</h2>
        <div className="row g-3">
          {genres.map((genre, index) => (
            <div key={index} className="col-6 col-md-3">
              <div
                className="rounded text-white d-flex flex-column justify-content-between p-3"
                style={{
                  height: "180px",
                  background: `linear-gradient(135deg, ${genre.bg})`,
                  color: "#3E2F5B",
                  fontWeight: "600",
                  fontSize: "1.1rem",
                  position: "relative",
                  overflow: "hidden",
                  boxShadow: "0 6px 12px rgba(0,0,0,0.1)"
                }}
              >
                <h5 className="fw-bold z-1">{genre.name}</h5>
                <img
                  src={genre.image}
                  alt={genre.name}
                  style={{
                    width: "70%",
                    position: "absolute",
                    bottom: "10px",
                    right: "10px",
                    transform: "rotate(10deg)",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.4)",
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
