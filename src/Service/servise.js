import axios from "axios";
const myKey = "api_key=6cd32f1caf514f8927d6e9f8f5ec88a6";
const trendMovies = "/trending/movie/day?";
// const searchMovies = "/search/movie?"
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3"
});



export const getMovies = async () => {
    const data = await instance.get(`${trendMovies}${myKey}`)
    console.log(data);
    return data;
}