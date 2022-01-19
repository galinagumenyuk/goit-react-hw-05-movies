import { useState, useEffect } from "react";
import * as APIservice from "../APIservice";
import { useParams} from "react-router-dom";
import s from "./Reviews.module.css";
import PropTypes from "prop-types";

const Reviews = () => { 
     const { movieId } = useParams();
    const [reviews, setReviews] = useState([]);
     useEffect(() => {
        APIservice.fetchReviews(movieId)
            .then(setReviews);
     }, [movieId]);
    
    return (
        <ul>
            {reviews.length > 0 ? reviews.map(review => <li key={review.id}>
                <p className={s.subTitle}>Author: {review.author}</p>
               <p>{review.content}</p>
            </li>) : <p>We don't have any reviews for this movie</p>}
        </ul>

    )
}

export default Reviews;


Reviews.propTypes = {
    reviews: PropTypes.array
}