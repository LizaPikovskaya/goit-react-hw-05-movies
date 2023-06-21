import { fetchCast } from 'components/services/reviewAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { List } from './Cast.styled';

export const Cast = () => {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCast = async () => {
      try {
        const response = await fetchCast(movieId);
        setCast(response.data.cast);
      } catch (error) {}
    };
    getCast();
  }, [movieId]);

  return (
    <List>
      {cast.map(({ character, name, profile_path, id }) => (
        <li key={id}>
          <img width="200" height="300"
            src={`https://image.tmdb.org/t/p/w200${profile_path}`}
            alt={name}
          />
          <p>Name: {name}</p>
          <p>Character: {character}</p>
        </li>
      ))}
    </List>
  );
};
