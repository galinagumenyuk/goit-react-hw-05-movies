import { useState, useEffect } from "react";
import * as apiService from "../../apiService";
import { Link, useNavigate, useLocation, useSearchParams} from "react-router-dom";
import s from "./Movies.module.css";
import PropTypes from "prop-types";

const Movies = () => {
    const [inputText, setInputText] = useState("");
    const [query, setQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const navigate = useNavigate();
    const location = useLocation();
    const [searchParams] = useSearchParams();

    const search = searchParams.get("query");
    
    useEffect(() => {
        if (query.trim() === "") {
            return;
        }
        apiService.fetchMovieByKeyWord(query)
            .then(setMovies);
    }, [query]);

    useEffect(() => {
        if (search === null) { return;}
        apiService.fetchMovieByKeyWord(search)
            .then(setMovies);
    }, [search]);

    const handleNameChange = (e) => {
        setInputText(e.currentTarget.value.toLowerCase())
    };  
    
    const handleClick = (e) => {
        e.preventDefault();
        setQuery(inputText); 
        navigate({ ...location, search: `query=${inputText}` });
    }
    
    const handleKeyDown = (e) => { 
        if (e.key === 'Enter') { 
            setQuery(inputText); 
        navigate({ ...location, search: `query=${inputText}` });
        }
    }

        return (
            <div>
                <input
                    type="text"
                    autoComplete="off"
                    autoFocus
                    onChange={handleNameChange}
                    onKeyPress={handleKeyDown}
                ></input>
                <button type='submit' onClick={handleClick}>Search</button>
                <ul>
                {movies && movies.map(movie => <li key={movie.id} className={ s.item}>
                <Link to={`/movies/${movie.id}`} state={{from: location}} className={s.link }> {movie.title}</Link>
                </li>)}
                </ul> 
            </div>
        )
    }

export default Movies;

Movies.propTypes = {
  query: PropTypes.string,
  inputText: PropTypes.string,
  movies: PropTypes.array,
  handleNameChange: PropTypes.func,
  handleKeyDown: PropTypes.func,
  handleClick: PropTypes.func,
};