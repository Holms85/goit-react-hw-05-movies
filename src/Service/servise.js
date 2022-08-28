import axios from "axios";
const myKey = "api_key=6cd32f1caf514f8927d6e9f8f5ec88a6";
const trendMovies = "/trending/movie/day?";
// const searchMovies = "/search/movie?"
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});



export const getMovies = async () => {
    const result = await instance.get(`${trendMovies}${myKey}`);
    const { data } = result;
    const { results } = data;
    console.log(results);
    return results;
};

export const getSingleMovie = async (id) => {
    const result = await instance.get(`/movie/${id}?${myKey}`);
    const { data } = result;
    // const { results } = data;
    console.log(result);
    return data;
}