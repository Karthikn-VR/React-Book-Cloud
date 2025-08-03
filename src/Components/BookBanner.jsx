import { useEffect, useState } from "react";
import StackBooks from './Images/StackBooks.png';
import cover1 from './Images/cover1.png';
import cover2 from './Images/cover2.png';
import cover3 from './Images/cover3.png';
import '../App.css'
import { useNavigate } from "react-router-dom";

export default function BookBanner() {
  const navigate = useNavigate();
  return (
    <div className="container-fluid py-5" style={{ backgroundColor: '#FFE5D9' }}>
      <div className="row align-items-center ms-5">
  
        <div className="col-md-6">
          <h1 className="fw-bold display-4" style={{ color: '#3E2F5B' }}>
            Meet your next favorite book
          </h1>
          <p className="mt-3" style={{ color: '#5C5470' }}>
            Dive into a curated selection of captivating stories and insightful reads.
          </p>

          <div className="d-flex gap-3 mt-4">
          
            <button
              className="btn text-white"
              style={{
                padding: '12px 24px',
                width: '180px',
                borderRadius: '8px',
                fontWeight: '600',
                backgroundColor: '#6D597A',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.15)',
                border: 'none',
              }}
            >
              Buy Now!
            </button>

            
            <button
              className="btn"
              onClick={()=>navigate('/genre')}
              style={{
                padding: '12px 24px',
                width: '180px',
                borderRadius: '8px',
                fontWeight: '600',
                background: '#F4A261',
                color: '#003366',
                letterSpacing: '0.5px',
                border: 'none',
                boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
              }}
            >
              Explore Books
            </button>
          </div>
        </div>

     
        <div className="col-md-6 d-flex justify-content-center mt-4 mt-md-0">
          <div style={{ position: 'relative', width: '420px', height: '420px' }}>
            <img
              src={cover3}
              alt="Third Book"
              className="book-stack"
              style={{
                position: 'absolute',
                top: '40px',
                left: '0px',
                zIndex: 1,
                height: '350px',
                borderRadius: '12px',
                boxShadow: '0 6px 12px rgba(0, 0, 0, 0.5)',
                transition: 'transform 0.3s, z-index 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-10px)';
                e.currentTarget.style.zIndex = '10';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.zIndex = '1';
              }}
            />

            <img
              src={cover2}
              alt="Second Book"
              className="book-stack"
              style={{
                position: 'absolute',
                top: '20px',
                left: '80px',
                zIndex: 2,
                height: '350px',
                borderRadius: '12px',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.3)',
                transition: 'transform 0.3s, z-index 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-10px)';
                e.currentTarget.style.zIndex = '10';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.zIndex = '2';
              }}
            />

            <img
              src={cover1}
              alt="Front Book"
              className="book-stack"
              style={{
                position: 'absolute',
                top: '0px',
                left: '160px',
                zIndex: 3,
                height: '350px',
                borderRadius: '12px',
                boxShadow: '0 10px 20px rgba(0, 0, 0, 0.4)',
                transition: 'transform 0.3s, z-index 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.05) translateY(-10px)';
                e.currentTarget.style.zIndex = '10';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1) translateY(0)';
                e.currentTarget.style.zIndex = '3';
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
