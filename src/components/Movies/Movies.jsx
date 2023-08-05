// Movies.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import MovieSearch from '../MovieSearch/MovieSearch';

function Movies() {
  const location = useLocation();

  return (
    <div>
      {location.pathname === '/movies' && <MovieSearch />}
      <h2>Search Movies</h2>
      {/* Add your movie search results here */}
    </div>
  );
}

export default Movies;
