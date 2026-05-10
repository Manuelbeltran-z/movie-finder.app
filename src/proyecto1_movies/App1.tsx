import { Route, Routes } from "react-router-dom";
import Favorites from "./pages/Favorites";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import NotFound from "./pages/NotFound";
import Search from "./pages/Search";
import NavBarMovie from "./components/NavBar";

export default function App1() {
  return (
    <>
      <NavBarMovie />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/movie/:id" element={<MovieDetail />}></Route>
        <Route path="/favorites" element={<Favorites />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </>
  );
}
