
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
//import 'https://fonts.googleapis.com/css2?family=Libre+Baskerville&family=Open+Sans:wght@400;600&display=swap';
import Navbar from "../Components/Navbar";
import '../App.css'
export default function Features() {
  const features = [
    {
      title: "Curated Book Selections",
      description: "Discover expertly curated collections of bestselling fiction, timeless classics, and trending genres tailored to your reading preferences.",
      icon: "📚"
    },
    {
      title: "Explore by Genre",
      description: "Dive into a vast array of genres, from gripping thrillers to heartfelt romances, with intuitive filters for seamless discovery.",
      icon: "🔍"
    },
    {
      title: "Real-Time Book Data",
      description: "Access up-to-date book information, including reviews and previews, powered by the Google Books API.",
      icon: "📡"
    },
    {
      title: "Seamless Across Devices",
      description: "Enjoy a fluid and responsive experience on any device, from smartphones to desktops, with our optimized interface.",
      icon: "📱"
    },
    {
      title: "Dynamic Book Banners",
      description: "Engage with beautifully animated banners showcasing featured titles and new releases.",
      icon: "🎨"
    },
    {
      title: "Intuitive Navigation",
      description: "Navigate effortlessly through genres, book details, and collections with React Router's smooth routing.",
      icon: "🧭"
    }
  ];

  return (
    <div>
      <Navbar />
      <div 
        className="container-fluid py-5" 
        style={{ 
          background: 'linear-gradient(135deg, #f5f4f0 0%, #e8e5d9 100%)', 
          minHeight: '100vh',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {/* Subtle background overlay for library aesthetic */}
        <div 
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: 'url(https://images.unsplash.com/photo-1507842217343-583bb727ad02?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80) no-repeat center center',
            backgroundSize: 'cover',
            opacity: 0.1,
            zIndex: 1
          }}
        />
        <div className="container py-5 position-relative" style={{ zIndex: 2 }}>
          <div className="text-center mb-5">
            <h1 
              className="fw-bold display-3" 
              style={{ 
                color: "#2c2a1f", 
                fontFamily: "'Libre Baskerville', serif",
                letterSpacing: '0.5px'
              }}
            >
              Features of Our Digital Library
            </h1>
            <p 
              className="mt-3" 
              style={{ 
                color: "#4a4739", 
                fontSize: "1.2rem", 
                fontFamily: "'Open Sans', sans-serif",
                maxWidth: '700px',
                margin: '0 auto'
              }}
            >
              Unlock a world of literature with tools designed to make your reading journey effortless, engaging, and inspiring.
            </p>
          </div>
          <div className="row g-4">
            {features.map((feature, index) => (
              <div key={index} className="col-12 col-sm-6 col-lg-4">
                <div 
                  className="p-4 shadow rounded h-100 text-center bg-white"
                  style={{ 
                    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                    fontFamily: "'Open Sans', sans-serif",
                    border: '1px solid #e0d9c8',
                    animation: `fadeInUp 0.5s ease ${index * 0.1}s both`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
                  }}
                >
                  <div style={{ fontSize: "3.5rem", color: "#6b4e31" }}>{feature.icon}</div>
                  <h5 
                    className="fw-bold mt-3" 
                    style={{ 
                      color: "#2c2a1f", 
                      fontFamily: "'Libre Baskerville', serif",
                      fontSize: '1.25rem'
                    }}
                  >
                    {feature.title}
                  </h5>
                  <p 
                    style={{ 
                      fontSize: "1rem", 
                      color: "#4a4739", 
                      lineHeight: "1.7" 
                    }}
                  >
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-5">
            <a 
              href="/genre" 
              className="btn" 
              style={{ 
                backgroundColor: "#6b4e31", 
                color: "#fff", 
                padding: "12px 30px", 
                borderRadius: "10px", 
                fontFamily: "'Open Sans', sans-serif", 
                fontWeight: "600",
                fontSize: '1.1rem',
                transition: 'background-color 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#8b6f47'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#6b4e31'}
            >
              Start Exploring Now
            </a>
          </div>
        </div>
      </div>
      {/* CSS Keyframes for animation */}
      <style>
        {`
          @keyframes fadeInUp {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }
        `}
      </style>
    </div>
  );
}