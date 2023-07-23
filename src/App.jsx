// App.jsx
import React, { Suspense } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const Home = React.lazy(() => import('./components/Home/Home'));
const Movies = React.lazy(() => import('./components/Movies/Movies'));
const MovieDetails = React.lazy(() =>
  import('./components/MovieDetails/MoviesDetails')
);
const Cast = React.lazy(() => import('./components/Cast/Cast'));
const Reviews = React.lazy(() => import('./components/Reviews/Reviews'));

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Route exact path="/" component={Home} />
        <Route exact path="/movies" component={Movies} />
        <Route exact path="/movies/:movieId" component={MovieDetails} />
        <Route exact path="/movies/:movieId/cast" component={Cast} />
        <Route exact path="/movies/:movieId/reviews" component={Reviews} />
      </Suspense>
    </Router>
  );
}

export default App;
