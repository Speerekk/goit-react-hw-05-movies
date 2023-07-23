import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

function Reviews() {
  const { movieId } = useParams();
  const [reviewsData, setReviewsData] = useState([]);

  useEffect(() => {
    // Запрос к API themoviedb.org для получения обзоров фильма
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
        params: {
          api_key: 'e9ca223ab9ca4a994e59de0722330ef2',
        },
      })
      .then(response => setReviewsData(response.data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div>
      <h2>Reviews</h2>
      <ul>
        {reviewsData.map(review => (
          <li key={review.id}>
            <h3>{review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Reviews;
