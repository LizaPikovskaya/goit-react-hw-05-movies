import { Link } from 'react-router-dom';

export const Home = ({data}) => {
  return (
    <ul>
      {data.map(({ id, title }) => (
        <li key={id}>
          <Link to={`movie/${id}`}>{title}</Link>
        </li>
      ))}
    </ul>
  );
};
