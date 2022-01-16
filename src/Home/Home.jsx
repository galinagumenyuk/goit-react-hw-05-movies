import * as APIservice from "../APIservice";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import s from "./Home.module.css";

const Home = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => { 
        APIservice.fetchPopularMovies().then(setMovies)
    },[])

    return (
        <ul>
            {movies && movies.map(movie => <li key={movie.id} className={ s.item}>
                <Link to={`/movies/${movie.id}`} className={s.link }> {movie.title}</Link>
            </li>) }
        </ul>
    )
    
}

export default Home;