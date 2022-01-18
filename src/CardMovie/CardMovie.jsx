import { useParams, NavLink, Outlet} from "react-router-dom";
import { useState, useEffect } from "react";
import * as APIservice from "../APIservice";
import s from "./CardMovie.module.css";
// import Cast from "../Cast/Cast";
// import Reviews from "../Reviews/Reviews";

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
                <img src={`https://www.themoviedb.org/t/p/w185${movie.poster_path}`} alt={movie.title}></img>
                <div className={s.wrapper}>
                    <h2>{movie.title}({ movie.release_date})</h2>
                    <p>User score: {movie.vote_average * 10}%</p>
                    <h3> Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    {movie.genres.map(genre => <span key={genre.name } className={s.text}>{genre.name}</span>)}
                </div>
            </article>}
            <p className={s.additionInfo}>Additional information</p>
            {movie && <div className={s.linkWrapper}>
                <NavLink to={`/movies/${movie.id}/cast`} className={navData => navData.isActive ? s.active : s.link}> Cast </NavLink>
                <NavLink to={`/movies/${movie.id}/reviews`} className={navData => navData.isActive ? s.active : s.link}>Reviews</NavLink>
            </div>}
            <Outlet />
        </>    
)
}

export default Card;
