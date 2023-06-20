import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movie } from 'pages/Movie';
import { SharedLayout } from './SharedLayout/SharedLayout';
import { MovieDetails } from 'pages/MovieDetails';
import { fetchPopularMovies } from 'components/services/trendingMoviesAPI';
import { useState } from 'react';
import { useEffect } from 'react';


export const App = () => {
    const [data, setData] = useState([])
    useEffect(() => {
      async function getPopularMovies() {
        const {data} = await fetchPopularMovies();
        setData(data.results);
      }
      getPopularMovies();
    }, []);
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route path="/" element={<Home data={data} />} />
        <Route path="movie" element={<Movie />} />
        <Route
          path="movie/:movieId"
          element={<MovieDetails data={data} />}
        ></Route>
      </Route>
    </Routes>
  );
};
