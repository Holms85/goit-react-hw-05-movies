import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react";
import { getSingleMovie } from "Service/servise";

const BASE_URL_PICTURE = 'https://image.tmdb.org/t/p/original';

export default function SingleMoviePage() {
    const [ state, setState ] = useState({
        item: {},
        loading: false,
        error: null,
    });
    const { id } = useParams();
    const navigate = useNavigate();

    const goBack = () => navigate(-1);

    useEffect(() => {
        const fetchMovies = async () => {
            setState({
                ...state,
                loading: true,
            })
            try {
                const result = await getSingleMovie(id);
                    console.log(result)
                setState(prevState=> {
                    return {
                        ...prevState,
                        item: {...prevState.item, ...result
                    }
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
        fetchMovies();
    }, [setState]);
    console.log(id)
    const { title, overview, genres, poster_path, vote_average } = state.item;
   
    return (
        <>
            <img src={`${BASE_URL_PICTURE}${poster_path}`} alt={title} />
            <button onClick={goBack}>Go Back</button>
            <h1>{title}</h1>
            <p>User score: {vote_average}</p>
            <h2>Overview <br />{overview}</h2>
            {/* {genresName} */}
            <p>Genres <br />{ genres?.map(el => {return `${el.name}`;}
        
    )}</p>
            </>
    )
};
