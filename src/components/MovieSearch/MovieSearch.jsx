import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function MovieSearch() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    // Implement your search functionality here
    navigate(`/movies?query=${encodeURIComponent(searchQuery)}`);
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
