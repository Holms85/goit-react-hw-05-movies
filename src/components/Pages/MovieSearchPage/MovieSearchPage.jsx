import { useState, useEffect } from "react";
import { getSearchMovies } from "Service/servise";
import MovieSearchForm from "components/Modules/MovieSearchForm/MovieSearchForm";
import AllMoviesList from "components/Modules/AllMoviesList/AllMoviesList";
export default function MovieSearchPage() {
    const [state, setState] = useState({
        items: [],
        loading: false,
        error: null,
    });

    const [search, setSearch] = useState('');

    useEffect(() => {
    const fetchMovies = async () => {
            setState({
                ...state,
                loading: true,
            })
            try {
                const result = await getSearchMovies(search);
                    console.log(result)
                setState(prevState=> (
                    {
                        ...prevState,
                        items: result,
                    
                }))
            } catch (error) {
                setState(prevState => ({
                    ...prevState,
                    error,
                }))
            } finally {
                setState(prevState => {
                    return {...prevState,
                    loading: false,}
                }
                )
            }
        } 
        if (search) {
            fetchMovies();
        }
},[search])

    const changeSearch = ({ search }) => {
        setSearch(search);
    };
    const { items, loading, error } = state;
    console.log(items)
    return (
        <>
            <MovieSearchForm onSubmit={changeSearch} />
            {items.length > 0 && <AllMoviesList items={items} />}
            {loading && <p>...Load trend movies</p>}
            {error && <p>...Loading failed</p>}
            </>
    )
};