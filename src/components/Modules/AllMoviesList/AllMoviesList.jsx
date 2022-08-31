import { Link, useLocation } from 'react-router-dom';

export default function AllMoviesList({ items }) {
  const location = useLocation();
  const elements = items.map(({ id, title }) => (
    <li key={id}>
      <Link state={{ from: location }} to={`/movies/${id}`}>
        {title}
      </Link>
    </li>
  ));
  return <ol>{elements}</ol>;
}

AllMoviesList.defaultProps = {
  items: [],
};
