// components/Movies/Movies.js
import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function Movies() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = event => {
    event.preventDefault();
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
      <h2 className="search">Search Movies</h2>
      <form onSubmit={handleSearch} className="search">
        <input
          type="text"
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder="Enter movie name"
          className="search-in"
        />
        <button type="submit">Search</button>
      </form>
      <ul>
        {searchResults.map(movie => (
          <li key={movie.id}>
            <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;
