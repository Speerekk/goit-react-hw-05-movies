// App.js
import React, { Suspense } from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import './index.css'; // Import the CSS file

const Home = React.lazy(() => import('./components/Home/Home'));
const Movies = React.lazy(() => import('./components/Movies/Movies'));
const MovieDetails = React.lazy(() =>
  import('./components/MovieDetails/MoviesDetails')
);
const Cast = React.lazy(() => import('./components/Cast/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));

function App() {
  return (
    <div>
      <header className="header-dec">
        <nav>
          <ul className="navigation">
            <li>
              {/* No need for 'exact' prop here */}
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li>
              {/* No need for 'exact' prop here */}
              <Link to="/movies" className="nav-link">
                Movies
              </Link>
            </li>
          </ul>
        </nav>
      </header>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies/*" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />} />
          <Route path="/movies/:movieId/cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
