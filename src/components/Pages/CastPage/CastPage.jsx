import { useParams, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect } from "react";
import { getActor } from "Service/servise";

const BASE_URL_PICTURE = 'https://image.tmdb.org/t/p/original';
const DEFAULT_FOTO ='https://vyshnevyi-partners.com/wp-content/uploads/2016/12/no-avatar-300x300.png';

export default function CastPage() {
    const [ state, setState ] = useState({
        item: [],
        loading: false,
        error: null,
    });
    const { id } = useParams();
    const location = useLocation();
    // const navigate = useNavigate();

    // const goBack = () => navigate(-1);

    useEffect(() => {
        const fetchMovies = async () => {
            setState({
                ...state,
                loading: true,
            })
            try {
                const result = await getActor(id);
                
                    console.log(result)
                setState(prevState=> {
                    return {
                        ...prevState,
                        item: result
                    
                    }
                })
            } catch (error) {
                setState({
                    ...state,
                    error,
                })
            } finally {
                setState(prevState => {
                    return {...prevState,
                    loading: false,}
                }
                )
            }
        } 
        console.log(state.item);
        fetchMovies();
    }, [setState]);
    // console.log(id)
    // const { title, overview, genres, poster_path, vote_average } = state.item;
    const { item } = state;
    console.log(item)
    return (
        <ul>
      {item.length > 0 && item.map(el => {
        const { id, profile_path, original_name, character } = el;
        return (
          <li key={id}>
            <img
              src={
                profile_path !== null
                  ? `${BASE_URL_PICTURE}${profile_path}`
                  : DEFAULT_FOTO
              }
              alt={original_name}
            />
            <p>{original_name}</p>
            <p> Character: {character}</p>
          </li>
        );
      })}
    </ul>
  );
};