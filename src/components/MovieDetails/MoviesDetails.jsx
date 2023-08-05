import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

function MovieDetails() {
  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    axios
      .get(`https://api.themoviedb.org/3/movie/${movieId}`, {
        params: {
          api_key: 'e9ca223ab9ca4a994e59de0722330ef2',
        },
      })
      .then(response => setMovieDetails(response.data))
      .catch(error => console.error(error));
  }, [movieId]);

  return (
    <div>
      <h2>{movieDetails.title}</h2>
      <p>{movieDetails.overview}</p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p>Rating: {movieDetails.vote_average}</p>
      <p>
        Genres:{' '}
        {movieDetails.genres &&
          movieDetails.genres.map(genre => genre.name).join(', ')}
      </p>
      {/* Add links to "Cast" and "Reviews" pages */}
      <Link to={`/movies/${movieId}/cast`}>Cast</Link> |{' '}
      <Link to={`/movies/${movieId}/reviews`}>Reviews</Link>
    </div>
  );
}

export default MovieDetails;
