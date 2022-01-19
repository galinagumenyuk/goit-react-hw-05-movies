import { useState, useEffect } from "react";
import * as APIservice from "../APIservice";
import { useParams} from "react-router-dom";
import s from "./Cast.module.css";
import PropTypes from "prop-types";


const Cast = () => { 
     const { movieId } = useParams();
    const [cast, setCast] = useState(null);


     useEffect(() => {
        APIservice.fetchCast(movieId)
            .then(setCast);
     }, [movieId]);
    
    return (
        <ul>
            {cast && cast.map(item => <li key={item.id} className={ s.link}>
                <img src={`https://www.themoviedb.org/t/p/w185${item.profile_path}`} alt={item.name}></img>
                <div>
                <p>{item.name}</p>
                <p>Character:</p>
                <p>{item.character}</p>
                </div>
            </li>)}
        </ul>
    )
}

export default Cast;

Cast.propTypes = {
    cast: PropTypes.array
}