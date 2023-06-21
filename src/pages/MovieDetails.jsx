import { Container } from 'components/Container/Container.styled';
import { fetchDetails } from 'components/services/reviewAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { MovieInfo } from 'components/MovieDetails/MovieInfo';
import { Loader } from 'components/Loader/Loader';

const MovieDetails = () => {
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);
  const { movieId } = useParams();
  useEffect(() => {
    const getDetails = async () => {
      try {
        setLoading(true);
        const response = await fetchDetails(movieId);
        setDetails(response.data);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getDetails();
  }, [movieId]);

  return (
    <section style={{ padding: '30px 0px' }}>
      <Container>
        {loading && <Loader/>}
        {details.length && <MovieInfo details={details} />}</Container>
    </section>
  );
};

export default MovieDetails;
