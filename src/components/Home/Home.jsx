import * as apiService from "../../apiService";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import s from "./Home.module.css";
import PropTypes from "prop-types";

const Home = () => {
    const [movies, setMovies] = useState([]);
    const location = useLocation();

    useEffect(() => {
        apiService.fetchPopularMovies().then(setMovies);
    }, []);

    return (
        <>
            <h1>Tranding today</h1>
        <ul>
            {movies && movies.map(movie => <li key={movie.id} className={ s.item}>
                <Link to={ `/movies/${movie.id}`}
                    state={{ from: location}}
                 className={s.link }> {movie.title}</Link>
            </li>) }
        </ul>
        </>
    )
    
}

export default Home;

Home.propTypes = { 
    movies: PropTypes.array,
}