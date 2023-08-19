import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import MovieCard from '../MovieCard/MovieCard';

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');
  const [searchResults, setSearchResults] = useState([]);

  useEffect(() => {
    if (query) {
      axios
        .get('https://api.themoviedb.org/3/search/movie', {
          params: {
            api_key: 'e9ca223ab9ca4a994e59de0722330ef2',
            query,
          },
        })
        .then(response => setSearchResults(response.data.results))
        .catch(error => console.error(error));
    }
  }, [query]);

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      <ul>
        {searchResults.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </ul>
    </div>
  );
}

export default SearchResults;
