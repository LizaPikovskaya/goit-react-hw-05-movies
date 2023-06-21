import { Container } from 'components/Container/Container.styled';
import { fetchDetails } from 'components/services/reviewAPI';
import { useEffect, useState } from 'react';
import {
  useParams,
} from 'react-router-dom';
import { MovieInfo } from 'components/MovieDetails/MovieInfo';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const { movieId } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetchDetails(movieId);
        setDetails(response.data);
      } catch (error) {
        console.log(error);
      } 
    };
    getDetails();
  }, [movieId]);

  return (
    <section style={{ padding: '30px 0px' }}>
      <Container>
      <MovieInfo details={details} />
      </Container>
    </section>
  );
};

export default MovieDetails;
