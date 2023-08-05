import React from 'react';
import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
  return (
    <div>
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <Link to={`/movies/${movie.id}`}>View Details</Link>
    </div>
  );
}

export default MovieCard;
