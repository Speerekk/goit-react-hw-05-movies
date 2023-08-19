import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function MovieSearch() {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const existingQuery = queryParams.get('query') || '';

  const [searchQuery, setSearchQuery] = useState(existingQuery);

  const handleSearch = () => {
    navigate(`/movies/search-results?query=${encodeURIComponent(searchQuery)}`);
  };

  return (
    <div className="search">
      <input
        type="text"
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        placeholder="Search Movies..."
        className="search-in"
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default MovieSearch;
