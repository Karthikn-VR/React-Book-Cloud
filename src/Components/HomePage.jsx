import BookBanner from "./BookBanner";
import Books from "./Books";
import Navbar from "./Navbar";
import AdventureBooks from "../Genre/AdventureBooks";
import Genre from "../Pages/Genre";
import '../App.css'
export default function HomePage(){


    return(
        <div>
            <Navbar />
        
            <BookBanner />
            <Books />
            
        </div>
    );
}