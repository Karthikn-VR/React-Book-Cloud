import React from 'react';

const BookCard = ({ bookInfo }) => {
  const info = bookInfo;
  
  return (
    <div className="col-lg-2 col-md-3 col-sm-4 col-6 d-flex flex-column mb-3">
      <div className="card h-100 d-flex border-0 shadow" style={{ width: '100%', maxWidth: '12rem', borderRadius: "10px" }}>
        <div className="text-center">
          <img
            src={
              info.imageLinks?.thumbnail?.replace("http://", "https://") ||
              "https://via.placeholder.com/128x193?text=No+Image"
            }
            className="card-img-top p-2"
            alt={info.title}
            style={{
              height: "150px",
              maxWidth: "100px",
              color: 'Highlight',
              objectFit: "contain"
            }}
          />
        </div>
        <div className="card-body d-flex flex-column p-2">
          <div>
            <h6 className="card-title text-truncate mb-1" style={{ fontSize: '0.9rem' }} title={info.title}>
              {info.title}
            </h6>
            <p className="card-text mb-2" style={{ fontSize: '0.75rem' }}>
              <strong>Author:</strong> {info.authors?.[0] || "Unknown"}
            </p>
          </div>
          <div className="mt-auto">
            <a
              href={info.infoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-sm w-100 py-1"
              style={{
                backgroundColor: "#6D597A",
                color: "#fff",
                fontWeight: "500",
                borderRadius: "6px",
                border: "none",
                fontSize: "0.8rem"
              }}
            >
              View
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookCard;