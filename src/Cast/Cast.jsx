import { useState, useEffect } from "react";
import * as APIservice from "../APIservice";
import { useParams} from "react-router-dom";
// import s from "./CardMovie.module.css";

const Cast = () => { 
     const { movieId } = useParams();
    const [cast, setCast] = useState(null);
     useEffect(() => {
        APIservice.fetchCast(movieId)
            .then(setCast);
     }, [movieId]);
    
    return (
        <ul>
            {cast && cast.map(item => <li key={cast.id}>
                <img src={`https://www.themoviedb.org/t/p/w200${cast.profile_path}`} alt={cast.name}></img>
                <p>{cast.name}</p>
                <p>Character: {cast.character}</p>
            </li>)}
        </ul>

    )
}

export default Cast;