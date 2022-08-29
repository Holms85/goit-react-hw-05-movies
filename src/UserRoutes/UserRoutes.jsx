import { Routes, Route } from "react-router-dom"
import Home from "../components/Pages/Home/Home"
import Movies from "../components/Pages/Movies/Movies";
import NotFound from "../components/Pages/NotFound/NotFound";
import SingleMoviePage from "../components/Pages/SingleMoviePage/SingleMoviePage";

export default function UserRoutes() {
    return (
        <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMoviePage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
    )
};
