import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getReviews } from 'Service/servise';

export default function ReviewsPage() {
  const [state, setState] = useState({
    item: [],
    loading: false,
    error: null,
  });
  const { id } = useParams();

  useEffect(() => {
    const fetchMovies = async () => {
      setState({
        ...state,
        loading: true,
      });
      try {
        const result = await getReviews(id);

        console.log(result);
        setState(prevState => {
          return {
            ...prevState,
            item: result,
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
  }, [id]);
  // console.log(id)
  // const { title, overview, genres, poster_path, vote_average } = state.item;
  const { item } = state;
  console.log(item);
  return (
    <>
      {item && item.length > 0 ? (
        <ul>
          {item.map(el => {
            const { id, author, content } = el;
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
              </li>
            );
          })}
        </ul>
      ) : (
        <p>We don't have any reviews for this movie</p>
      )}
    </>
  );
}
