import { Route, Routes } from "react-router-dom";
import "./App.css";
import Navigation from "./Navigation/Navigation";
import Home from "./Home/Home.jsx";
import Movies from "./Movies/Movies.jsx";
import Card from "./CardMovie/CardMovie.jsx";
import Cast from "./Cast/Cast.jsx";
import Reviews from "./Reviews/Reviews";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId/" element={<Card />}>
          <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
          <Route path="/movies/:movieId/reviews" element={<Reviews />}></Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
