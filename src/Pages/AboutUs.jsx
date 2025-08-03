// import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css'
//import 'https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Open+Sans:wght@400;600&display=swap';
import Navbar from "../Components/Navbar";
import bookimg from '../Components/Images/books.jpg';
export default function Aboutus() {
  return (
    <div>
    <Navbar />
    <div 
      className="container-fluid py-5" 
      style={{ 
        background: 'linear-gradient(135deg, #f5f4f0 0%, #e8e5d9 100%)', 
        minHeight: '100vh',
      }}
    >
      <div className="container py-5">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h2 
              className="fw-bold display-4" 
              style={{ 
                color: "#2c2a1f", 
                fontFamily: "'Libre Baskerville', serif",
                letterSpacing: '0.5px'
              }}
            >
              Discover Your Next Great Read
            </h2>
            <p 
              className="mt-4" 
              style={{ 
                color: "#4a4739", 
                fontSize: "1.1rem", 
                lineHeight: "1.8", 
                fontFamily: "'Open Sans', sans-serif" 
              }}
            >
              Welcome to our digital library, where the joy of discovering books comes to life. 
              Our mission is to connect book lovers with stories that inspire, inform, and captivate. 
              From timeless classics to the latest bestsellers, we make finding your next read seamless and delightful.
            </p>
            <p 
              style={{ 
                color: "#4a4739", 
                fontFamily: "'Open Sans', sans-serif" 
              }}
            >
              Powered by the Google Books API, our app offers real-time book searches, curated genre collections, 
              and a beautifully crafted interface designed with React and Bootstrap. Dive into a world of literature 
              with ease and elegance.
            </p>
            <a 
              href="/explore" 
              className="btn mt-3" 
              style={{ 
                backgroundColor: "#6b4e31", 
                color: "#fff", 
                padding: "10px 20px", 
                borderRadius: "8px", 
                fontFamily: "'Open Sans', sans-serif", 
                fontWeight: "600" 
              }}
            >
              Explore Our Collection
            </a>
          </div>
          <div className="col-lg-6 text-center">
            <img
              src={bookimg}
              alt="Cozy Library"
              style={{ 
                maxWidth: "100%", 
                height: "auto", 
                borderRadius: "15px", 
                boxShadow: "0 6px 20px rgba(0,0,0,0.15)", 
                objectFit: "cover", 
                maxHeight: "400px" 
              }}
            />
          </div>
        </div>
      </div>
    </div>
    </div>
    
  );
}