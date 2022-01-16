const KEY = "fa7d3ec0cb79e3ec102f854156943f99";
const BASE_URL = "https://api.themoviedb.org/3";
export function fetchPopularMovies() {
  return fetch(`${BASE_URL}/trending/movie/week?api_key=${KEY}`)
    .then((res) => res.json())
    .then((data) => data.results);
}
