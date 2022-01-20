import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Navigation from "./components/Navigation/Navigation.jsx";

const Home = lazy(() => import("./components/Home/Home.jsx"));
const Movies = lazy(() => import("./components/Movies/Movies.jsx"));
const Card = lazy(() => import("./components/CardMovie/CardMovie.jsx"));
const Cast = lazy(() => import("./components/Cast/Cast.jsx"));
const Reviews = lazy(() => import("./components/Reviews/Reviews.jsx"));

function App() {
  return (
    <div>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId/" element={<Card />}>
            <Route path="/movies/:movieId/cast" element={<Cast />} />
            <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          </Route>
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
