import axios from "axios";
import { useState , useEffect } from "react";
import BookCard from "../Components/BookCard";

export default function HorrorBooks(){
    
    const[Books , setBooks] = useState([]);
    const[pages , setPages] = useState(1);
    const[Errormsg , setErrorMsg] = useState(false);
    const maxResults = 30;
    const FetchBooks = async ()=> {
        try{
        const startIndex = pages * maxResults;
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=horror+books&startIndex=${startIndex}&maxResults=${maxResults}`
        );

        const data = response.data;
        setBooks(data.items || []);
     }
     catch(error){
        setErrorMsg(true)
     }
    };
      useEffect(() => {
        FetchBooks();
      }, [pages]);

      return(
        <div className="container my-4" style={{ backgroundColor: "#F8F4F0", borderRadius: "12px" }}>
            {Errormsg && <div class="alert alert-danger" role="alert">
                A simple danger alert—check it out!
                </div>}
      <h2 className="mb-4 fw-bold" style={{ color: "#3E2F5B"}}>Horror Books </h2>
      <div className="row">
        {Books.map((book, index) => (
          <BookCard key={index} bookInfo={book.volumeInfo} />
        ))}
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
    </div>
      );
}

