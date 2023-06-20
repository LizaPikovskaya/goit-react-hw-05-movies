import { Container } from 'components/Container/Container.styled';
import { Wrapper } from 'components/MovieDetailsCard/MovieDetailsCard.styled';
import { fetchDetails } from 'components/services/reviewAPI';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const MovieDetails = ({ data }) => {
  const [details, setDetails] = useState([]);
  console.log(details);
  const { movieId } = useParams();
  const movie = data.find(item => item.id === Number(movieId));
  useEffect(() => {
    const getDetails = async () => {
      try {
        const response = await fetchDetails(movieId);
        setDetails(response.data);
        console.log(response.data);
      } catch (error) {}
    };
    getDetails();
  }, []);
//   console.log(details.genres);

  const { title, vote_average, overview, poster_path, release_date } = movie;
  const {genres} = details;
  console.log(genres);
//   const genres = details.genres.map(item => item.name).split(',');

  return (
    <section style={{ padding: '30px 0px' }}>
      <Container>
        <Wrapper>
          <img src={`https://image.tmdb.org/t/p/w300${poster_path}`} alt="" />
          <div>
            <h1>
              {title} ({release_date.slice(0, 4)})
            </h1>
            <p>User Score: {(vote_average * 10).toFixed()}%</p>
            <h2>Overview</h2>
            <p>{overview}</p>
            <h3>Genres</h3>
            <p></p>
          </div>
        </Wrapper>
      </Container>
    </section>
  );
};
