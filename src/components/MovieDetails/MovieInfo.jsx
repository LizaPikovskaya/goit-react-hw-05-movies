import { useLocation } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';
import {
  AdditionalWrapper,
  Button,
} from 'components/MovieDetails/MovieDetails.styled';
import { StyledLink } from 'components/Home/Home.styled';
import { Outlet } from 'react-router-dom';
import { Wrapper } from 'components/MovieDetailsCard/MovieDetailsCard.styled';
import { Suspense } from 'react';
import { Loader } from 'components/Loader/Loader';

export const MovieInfo = ({ details }) => {
  const { title, vote_average, overview, poster_path, release_date } = details;
  const location = useLocation();
  const buttonBack = location.state ?? '/';
  return (
    <>
      <Button to={buttonBack}>
        <BiArrowBack />
        Go back
      </Button>
      <Wrapper>
        <img
          src={`https://image.tmdb.org/t/p/w300${poster_path}`}
          alt="title"
        />
        <div>
          <h1>
            {title}({release_date?.slice(0, 4)})
          </h1>
          <p>User Score: {(vote_average * 10).toFixed()}%</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{details.genres?.map(item => item.name).join(' ')}</p>
        </div>
      </Wrapper>
      <AdditionalWrapper>
        <p>Additional information</p>
        <ul>
          <li>
            <StyledLink to="cast">Cast</StyledLink>
          </li>
          <li>
            <StyledLink to="reviews">Reviews</StyledLink>
          </li>
        </ul>
      </AdditionalWrapper>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
