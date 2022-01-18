import { useState, useEffect } from "react";
import * as APIservice from "../APIservice";
import { useParams} from "react-router-dom";
// import s from "./CardMovie.module.css";

const Reviews = () => { 
     const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
     useEffect(() => {
        APIservice.fetchReviews(movieId)
            .then(setReviews);
     }, [movieId]);
    
    return (
        <ul>
            {reviews ? reviews.map(review => <li key={review.id}>
                <h3>Author: {review.author}</h3>
                <p>{review.content}</p>
            </li>) : <p>We don't have any reviews for this movie</p>}
        </ul>

    )
}

export default Reviews;