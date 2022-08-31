import { useState, useEffect } from 'react';
import { getMovies } from 'Service/servise';

import AllMoviesList from '../AllMoviesList/AllMoviesList';
export default function MoviesList() {
  const [state, setState] = useState({
    items: [],
    loading: false,
    error: null,
  });

  useEffect(() => {
    const fetchMovies = async () => {
      setState({
        ...state,
        loading: true,
      });
      try {
        const result = await getMovies();
        console.log(result);
        setState(prevState => {
          return {
            ...prevState,
            items: [...prevState.items, ...result],
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
  }, [setState]);
  const { items, loading, error } = state;

  return (
    <>
      {items.length > 0 && <AllMoviesList items={items} />}
      {loading && <p>...Load trend movies</p>}
      {error && <p>...Loading failed</p>}
    </>
  );
}
