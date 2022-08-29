import { Link } from "react-router-dom";

export default function AllMoviesList({items}) {
    const elements = items.map(({ id, title }) =>
        <li key={id}>
        <Link to={`/movies/${id}`}>{title}</Link>
        </li>);
    return <ol>{elements}</ol>;
};

AllMoviesList.defaultProps = {
    items: []
}
