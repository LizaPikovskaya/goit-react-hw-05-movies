import { fetchReview } from "components/services/reviewAPI";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export const Reviews = () => {
 const [reviews, setReviews] = useState([]);
 const { movieId } = useParams();

 useEffect(() => {
   const getCast = async () => {
     try {
       const response = await fetchReview(movieId);
       setReviews(response.data.results);
     } catch (error) {}
   };
   getCast();
 }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? 
      reviews.map(({ author, content, id }) => (
        <li key={id}>
          <h4>Author: {author}</h4>
          <p>{content}</p>
        </li>
      )) :
      <p>We don't have any reviews for this movie.</p>}
    </ul>
  );
};
