import { List, StyledLink } from 'components/Home/Home.styled';
import { fetchPopularMovies } from 'components/services/trendingMoviesAPI';
import { useEffect, useState } from 'react';
import {  useLocation } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const location = useLocation()
  useEffect(() => {
    async function getPopularMovies() {
      const { data } = await fetchPopularMovies();
      setData(data.results);
    }
    getPopularMovies();
  },[]);
  return (
    <List>
      {data.map(({ id, title }) => (
        <li key={id}>
          <StyledLink to={`movie/${id}`} state={location}>
            {title}
          </StyledLink>
        </li>
      ))}
    </List>
  );
};

export default Home;