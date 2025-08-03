import { useState, useRef } from "react";
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

export default function MovieHomepage() {
  const [CurrentView, SetCurrentView] = useState(0);
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -200, behavior: 'smooth' });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 200, behavior: 'smooth' });
  };

  const RenderView = () => {
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
    <div className="container-fluid p-3" style={{ minHeight: '100vh', color: '#333' }}>
      <Navbar />
      <div className="position-relative my-3">
        <button
          onClick={scrollLeft}
          className="position-absolute top-50 start-0 translate-middle-y btn btn-light shadow-sm"
          style={{ zIndex: 10 }}
        >
          ‹
        </button>

        <div
          className="d-flex overflow-auto mx-5 px-2 py-2"
          ref={scrollRef}
          style={{
            whiteSpace: 'nowrap',
            scrollbarWidth: 'none',
            msOverflowStyle: 'none'
          }}
        >
          {genres.map((genre, index) => (
            <button
              key={index}
              onClick={() => SetCurrentView(index + 1)}
              className="btn btn-outline-secondary mx-2"
              style={{
                borderRadius: '20px',
                fontWeight: '500',
                whiteSpace: 'nowrap'
              }}
            >
              {genre}
            </button>
          ))}
        </div>

        <button
          onClick={scrollRight}
          className="position-absolute top-50 end-0 translate-middle-y btn btn-light shadow-sm"
          style={{ zIndex: 10 }}
        >
          ›
        </button>
      </div>

      <div className="mt-4">{RenderView()}</div>
    </div>
  );
}
