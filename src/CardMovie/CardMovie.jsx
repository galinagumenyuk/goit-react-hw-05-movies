import { useParams, NavLink, Outlet, useNavigate, useLocation} from "react-router-dom";
import { useState, useEffect } from "react";
import * as APIservice from "../APIservice";
import s from "./CardMovie.module.css";
import PropTypes from "prop-types";


const Card = () => {
    const { movieId } = useParams();
    const navigate = useNavigate();
    const location = useLocation();
    const [movie, setMovie] = useState(null);
    
    const onGoBack = () => {
        (location.state && location.state.from) ? navigate(location.state.from) : navigate("/");
     };

    useEffect(() => {
        APIservice.fetchMovieDetails(movieId)
            .then(setMovie);
    }, [movieId]);


    return (
        <>
            <button type="button" onClick={onGoBack} className={ s.button}>Back</button>
            {movie && <article className={s.container}>
                <img src={`https://www.themoviedb.org/t/p/w185${movie.poster_path}`} alt={movie.title}></img>
                <div className={s.wrapper}>
                    <h2>{movie.title}({ new Date(Date.parse(movie.release_date)).getFullYear() + ''})</h2>
                    <p>User score: {movie.vote_average * 10}%</p>
                    <h3> Overview</h3>
                    <p>{movie.overview}</p>
                    <h3>Genres</h3>
                    {movie.genres.map(genre => <span key={genre.name } className={s.text}>{genre.name}</span>)}
                </div>
            </article>}
            <p className={s.additionInfo}>Additional information</p>
            {movie && <div className={s.linkWrapper}>
                <NavLink to={`/movies/${movie.id}/cast`} state={{from: location.state.from}} className={navData => navData.isActive ? s.active : s.link}> Cast </NavLink>
                <NavLink to={`/movies/${movie.id}/reviews`} state={{from: location.state.from}} className={navData => navData.isActive ? s.active : s.link}>Reviews</NavLink>
            </div>}
            <Outlet />
        </>    
)
}

export default Card;

Card.propTypes = {
  movie: PropTypes.array,
  onGoBack: PropTypes.func,
};