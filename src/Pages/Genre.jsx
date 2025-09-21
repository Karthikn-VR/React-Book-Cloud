import { useState, useRef, useContext } from "react";
import Navbar from "../Components/Navbar";
import AdventureBooks from '../Genre/AdventureBooks';
import CrimeBooks from '../Genre/CrimeBooks';
import FantasyBooks from '../Genre/FantasyBooks';
import HistoryBooks from '../Genre/HistoryBooks';
import HorrorBooks from '../Genre/HorrorBooks';
import MystryBooks from '../Genre/MystryBooks';
import RomanceBooks from '../Genre/RomanceBooks';
import SciFiBooks from '../Genre/SciFiBooks';
import ComicsBooks from "../Genre/ComicBooks";
import BiographyBooks from "../Genre/BiographyBooks";
import ChildrenBooks from "../Genre/ChildrensBooks";
import CookingBooks from "../Genre/CookingBooks";
import PoetryBooks from "../Genre/PoetryBooks";
import ThrillerBooks from "../Genre/ThrillerBooks";
import AllBooks from "../Genre/AllBooks";
import { SearchContext } from "../context/SearchContext";
import SearchResults from "../Components/SearchResults";

export default function MovieHomepage() {
  const [CurrentView, SetCurrentView] = useState(0);
  const scrollRef = useRef(null);
  const { searchResults, searchQuery, isSearchActive, clearSearch } = useContext(SearchContext);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const handleGenreClick = (index) => {
    // Clear search results when changing genres
    clearSearch();
    SetCurrentView(index + 1);
  };

  const RenderView = () => {
    // If search is active, show search results instead of genre books
    if (isSearchActive && searchResults.length > 0) {
      return <SearchResults results={searchResults} query={searchQuery} />;
    }

    // Otherwise show the selected genre
    switch (CurrentView) {
      case 1: return <AdventureBooks />;
      case 2: return <CrimeBooks />;
      case 3: return <FantasyBooks />;
      case 4: return <HistoryBooks />;
      case 5: return <HorrorBooks />;
      case 6: return <MystryBooks />;
      case 7: return <RomanceBooks />;
      case 8: return <SciFiBooks />;
      case 9: return <ComicsBooks />;
      case 10: return <ThrillerBooks />;
      case 11: return <PoetryBooks />;
      case 12: return <ChildrenBooks />;
      case 13: return <BiographyBooks />;
      case 14: return <CookingBooks />
      default: return <AllBooks />;
    }
  };

  const genres = [
    'Adventure Books',
    'Crime Books',
    'Fantasy Books',
    'History Books',
    'Horror Books',
    'Mystery Books',
    'Romance Books',
    'Scifi Books',
    'Comic Books',
    'Thriller Books',
    'Poetry Books',
    'Childern Books',
    'Biography Books',
    'Cooking Books',
    'Back To Home'
  ];

  return (
    <div className="container-fluid px-2 px-sm-3 py-2" style={{ minHeight: '100vh', color: '#333' }}>
      <Navbar />
      <div className="position-relative my-2 my-sm-3">
        <button
          onClick={scrollLeft}
          className="position-absolute top-50 start-0 translate-middle-y btn btn-light shadow-sm d-flex align-items-center justify-content-center"
          style={{ zIndex: 10, width: '30px', height: '30px', padding: '0', fontSize: '1.2rem' }}
        >
          ‹
        </button>

        <div
          className="d-flex overflow-auto mx-4 px-1 py-2"
          ref={scrollRef}
          style={{
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none',
            WebkitOverflowScrolling: 'touch'
          }}
        >
          {genres.map((genre, index) => (
            <button
              key={index}
              onClick={() => handleGenreClick(index)}
              className="btn btn-outline-secondary mx-1 px-2 py-1"
              style={{
                borderRadius: '20px',
                fontWeight: '500',
                whiteSpace: 'nowrap',
                fontSize: '0.85rem'
              }}
            >
              {genre}
            </button>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="position-absolute top-50 end-0 translate-middle-y btn btn-light shadow-sm d-flex align-items-center justify-content-center"
          style={{ zIndex: 10, width: '30px', height: '30px', padding: '0', fontSize: '1.2rem' }}
        >
          ›
        </button>
      </div>

      <div className="mt-3">{RenderView()}</div>
    </div>
  );
}
