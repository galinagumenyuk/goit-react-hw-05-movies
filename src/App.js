import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./Navigation/Navigation";
// import Home from "./Home/Home.jsx";
// import Movies from "./Movies/Movies.jsx";
// import Card from "./CardMovie/CardMovie.jsx";
// import Cast from "./Cast/Cast.jsx";
// import Reviews from "./Reviews/Reviews";

const Home = lazy(() => import("./Home/Home.jsx"));
const Movies = lazy(() => import("./Movies/Movies.jsx"));
const Card = lazy(() => import("./CardMovie/CardMovie.jsx"));
const Cast = lazy(() => import("./Cast/Cast.jsx"));
const Reviews = lazy(() => import("./Reviews/Reviews.jsx"));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/" element={<Card />}>
            <Route path="/movies/:movieId/cast" element={<Cast />}></Route>
            <Route
              path="/movies/:movieId/reviews"
              element={<Reviews />}
            ></Route>
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
