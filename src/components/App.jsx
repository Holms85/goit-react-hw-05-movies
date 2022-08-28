import {Routes, Route} from "react-router-dom"

import Menu from "./Modules/Menu/Menu";
import Home from "./Pages/Home/Home"
import Movies from "./Pages/Movies/Movies";
import NotFound from "./Pages/NotFound/NotFound";
import SingleMoviePage from "./Pages/SingleMoviePage/SingleMoviePage";
export const App = () => {
  return (
    <div>
      <Menu/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:id" element={<SingleMoviePage />} />
        <Route path="*" element={<NotFound/>} />
      </Routes>
     
    </div>
  );
};
