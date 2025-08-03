import axios from "axios";
import { useState , useEffect } from "react";

export default function RomanceBooks(){
    
    const[Books , setBooks] = useState([]);
    const[pages , setPages] = useState(1);
    const[Errormsg , setErrorMsg] = useState(false);
    const maxResults = 30;
    const FetchBooks = async ()=> {
        try{
        const startIndex = pages * maxResults;
        const response = await axios.get(
            `https://www.googleapis.com/books/v1/volumes?q=romance+books&startIndex=${startIndex}&maxResults=${maxResults}`
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
      <h2 className="mb-4 fw-bold" style={{ color: "#3E2F5B"}}>Adventure </h2>
      <div className="row">
        {Books.map((book, index) => {
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
                <div className="card-body d-flex flex-column h-100">
                <div>
                  <h6 className="card-title text-truncate" title={info.title}>
                    {info.title}
                  </h6>
                  <p className="card-text" style={{ fontSize: '0.8rem' }}>
                    <strong>Author:</strong> {info.authors?.[0] || "Unknown"}
                  </p>
                </div>
                <div className="mt-auto">
                  <a
                    href={info.infoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm w-100"
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
    </div>
      );
}

