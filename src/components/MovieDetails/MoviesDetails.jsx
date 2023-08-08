import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});
  const [castData, setCastData] = useState([]);
  const [reviewsData, setReviewsData] = useState([]);
  const [showCast, setShowCast] = useState(false);
  const [showReviews, setShowReviews] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: 'e9ca223ab9ca4a994e59de0722330ef2',
        },
      })
      .then(response => setMovieDetails(response.data))
      .catch(error => console.error(error));

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/credits`, {
        params: {
          api_key: 'e9ca223ab9ca4a994e59de0722330ef2',
        },
      })
      .then(response => setCastData(response.data.cast))
      .catch(error => console.error(error));

    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}/reviews`, {
        params: {
          api_key: 'e9ca223ab9ca4a994e59de0722330ef2',
        },
      })
      .then(response => setReviewsData(response.data.results))
      .catch(error => console.error(error));
  }, [movieId]);

  const handleGoBack = () => {
    navigate(-1); // Используем navigate для навигации назад
  };

  return (
    <div>
      <button onClick={handleGoBack}>Go Back</button>
      <div className="about">
        {movieDetails.poster_path && (
          <img
            src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
            alt={movieDetails.title}
          />
        )}
        <h2>{movieDetails.title}</h2>
        <p>{movieDetails.overview}</p>

        <p>Rating: {movieDetails.vote_average}</p>
        <p>
          Genres:{' '}
          {movieDetails.genres &&
            movieDetails.genres.map(genre => genre.name).join(', ')}
        </p>
      </div>
      <div className="button-about">
        <button onClick={() => setShowCast(!showCast)}>
          {showCast ? 'Hide Cast' : 'Show Cast'}
        </button>
        {showCast && (
          <div>
            <h3>Cast</h3>
            <ul>
              {castData.map(actor => (
                <li key={actor.id}>
                  {actor.name} as {actor.character}
                </li>
              ))}
            </ul>
          </div>
        )}

        <button onClick={() => setShowReviews(!showReviews)}>
          {showReviews ? 'Hide Reviews' : 'Show Reviews'}
        </button>
        {showReviews && (
          <div>
            <h3>Reviews</h3>
            <ul>
              {reviewsData.map(review => (
                <li key={review.id}>
                  <h4>{review.author}</h4>
                  <p>{review.content}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieDetails;
