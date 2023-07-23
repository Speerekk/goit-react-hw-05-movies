import React, { useState } from 'react';
import axios from 'axios';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = () => {
    axios
      .get('https://api.themoviedb.org/3/search/movie', {
        params: {
          api_key: 'e9ca223ab9ca4a994e59de0722330ef2',
          query: searchQuery,
        },
      })
      .then(response => setSearchResults(response.data.results))
      .catch(error => console.error(error));
  };

  return (
    <div>
      <h2>Search Movies</h2>
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
