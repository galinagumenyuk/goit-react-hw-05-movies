const KEY = "fa7d3ec0cb79e3ec102f854156943f99";
const BASE_URL = "https://api.themoviedb.org/3";

export function fetchPopularMovies() {
  return fetch(`${BASE_URL}/trending/all/day?api_key=${KEY}`)
    .then((res) => res.json())
    .then((data) => data.results);
}

export function fetchMovieByKeyWord(query) {
  return fetch(
    `${BASE_URL}/search/movie?api_key=${KEY}&query=${query}&language=en-US&page=1&include_adult=false`
  )
    .then((res) => res.json())
    .then((data) => data.results);
}
