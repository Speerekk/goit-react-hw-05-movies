import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [trendingMovies, setTrendingMovies] = useState([]);

  useEffect(() => {
    axios
      .get('https://api.themoviedb.org/3/trending/movie/day', {
        params: {
          api_key: 'e9ca223ab9ca4a994e59de0722330ef2',
        },
      })
      .then(response => setTrendingMovies(response.data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h2>Trending Movies</h2>
      <ul>
        {trendingMovies.map(movie => (
          <li key={movie.id}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Home;
