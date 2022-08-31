import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container">
      <h1>Page not found</h1>
      <Link to="/">Back to Main page</Link>
    </div>
  );
}
