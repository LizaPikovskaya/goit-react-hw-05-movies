import { Routes, Route } from 'react-router-dom';
import { Home } from 'pages/Home';
import { Movie } from 'pages/Movie';
import { SharedLayout } from './SharedLayout/SharedLayout';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="movie" element={<Movie />} />
      </Route>
    </Routes>
  );
};
