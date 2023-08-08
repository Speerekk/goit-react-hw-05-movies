import React from 'react';
import { useLocation } from 'react-router-dom';

function SearchResults() {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  return (
    <div>
      <h2>Search Results for: {query}</h2>
      {/* Отображение результатов */}
    </div>
  );
}

export default SearchResults;
