import { useState, useEffect } from "react";
import { getMovies } from "Service/servise";
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
                    // console.log(result)
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
    }, []);
    
    return (
        <ol></ol>
    )
};
