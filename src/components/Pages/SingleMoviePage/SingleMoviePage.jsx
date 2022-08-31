import {
  Link,
  useParams,
  useNavigate,
  Outlet,
  useLocation,
} from 'react-router-dom';

import { useState, useEffect } from 'react';
import { getSingleMovie } from 'Service/servise';
import s from '../SingleMoviePage/SingleMoviePage.module.css';

const BASE_URL_PICTURE = 'https://image.tmdb.org/t/p/original';

export default function SingleMoviePage() {
  const [state, setState] = useState({
    item: {},
    loading: false,
    error: null,
  });
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || '/movies';
  const goBack = () => navigate(from);

  useEffect(() => {
    const fetchMovies = async () => {
      setState({
        ...state,
        loading: true,
      });
      try {
        const result = await getSingleMovie(id);
        setState(prevState => {
          return {
            ...prevState,
            item: { ...prevState.item, ...result },
          };
        });
      } catch (error) {
        setState({
          ...state,
          error,
        });
      } finally {
        setState(prevState => {
          return { ...prevState, loading: false };
        });
      }
    };
    fetchMovies();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [id, setState]);

  const { title, overview, genres, poster_path, vote_average } = state.item;
//   console.log(poster_path);
  return (
    <>
      <button className={s.btn} onClick={goBack}>
        Go Back
      </button>
      <div className={s.section}>
        <img
          className={s.imgMovie}
          src={`${BASE_URL_PICTURE}${poster_path}`}
          alt={title}
        />
        <div className={s.info}>
          <p>{title}</p>
          <h2>User score:</h2>
          <p>{vote_average}</p>
          <h2>Overview</h2>
          <p>{overview}</p>
          <h3>Genres</h3>
          <p>{genres?.map(el => `${el.name}`)}</p>
        </div>
      </div>
      <p>Additional information</p>
      <Link state={{ from }} to={`/movies/${id}/cast`}>
        Cast
      </Link>

      <br />
      <Link state={{ from }} to={`/movies/${id}/reviews`}>
        Reviews
      </Link>
      <Outlet />
    </>
  );
}
