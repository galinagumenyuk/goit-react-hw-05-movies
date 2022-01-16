import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import * as APIservice from "../APIservice";
import s from "./CardMovie.module.css";

const Card = () => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        APIservice.fetchMovieDetails(movieId)
            .then(setMovie);
    }, [movieId]);

    return (
        <>
            {movie && <article className={s.container}>
                <img src={`https://www.themoviedb.org/t/p/w200${movie.poster_path}`} alt={movie.title}></img>
                <div className={s.wrapper}>
                    <h2>{movie.title}({ movie.release_date})</h2>
                    <p>User score: {movie.vote_average * 10}%</p>
                    <h3> Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    {movie.genres.map(genre => <span className={s.text}>{genre.name}</span>)}
                </div>
         </article> }  </>    
)
}

export default Card;
