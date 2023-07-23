import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

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
      {/* Render additional movie details here */}
    </div>
  );
}

export default MovieDetails;
