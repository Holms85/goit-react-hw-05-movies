import { useState, useEffect } from "react";
import { getMovies } from "Service/servise";
import { Link } from "react-router-dom";
export default function MoviesList() {
    const [ state, setState ] = useState({
        items: [],
        loading: false,
        error: null,
    });

    useEffect(() => {
        const fetchMovies = async () => {
            setState({
                ...state,
                loading: true,
            })
            try {
                const result = await getMovies();
                    console.log(result)
                setState(prevState=> {
                    return {
                        ...prevState,
                        items: [...prevState.items, ...result]
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
    const { items, loading, error } = state;

    const elements = items.map(({ id, title }) => <li key={id}><Link to={`/movies/${id}`}>{title}</Link></li>);
    return (
        <>
            <ol>{elements}</ol>
            {loading && <p>...Load trend movies</p>}
            {error && <p>...Loading failed</p>}
            </>
    )
};
