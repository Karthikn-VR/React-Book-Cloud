import React from 'react';
import BookCard from './BookCard';

const SearchResults = ({ results, query }) => {
  return (
    <div className="container my-4" style={{ backgroundColor: "#F8F4F0", borderRadius: "12px" }}>
      <h2 className="mb-4 fw-bold" style={{ color: "#3E2F5B" }}>Results for "{query}"</h2>
      
      {results.length === 0 ? (
        <div className="text-center py-5">
          <h4>No results found for "{query}"</h4>
          <p>Try different keywords or check your spelling</p>
        </div>
      ) : (
        <div className="row">
          {results.map((book) => (
            <BookCard key={book.id} bookInfo={book.volumeInfo} />
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchResults;