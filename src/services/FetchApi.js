import axios from 'axios';

export function fetchFilms() {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = 'a3f5e27baa2a1b83c70151e237938652';
  const url = `${BASE_URL}trending/all/day?api_key=${API_KEY}`;

  return axios.get(url).then(response => response.data.results);
}

export function fetchFilm(movie_id) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = 'a3f5e27baa2a1b83c70151e237938652';
  const url = `${BASE_URL}movie/${movie_id}?api_key=${API_KEY}&language=en-US`;

  return axios.get(url).then(response => response.data);
}

export function fetchCast(movie_id) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = 'a3f5e27baa2a1b83c70151e237938652';
  const url = `${BASE_URL}movie/${movie_id}/credits?api_key=${API_KEY}&language=en-US`;

  return axios.get(url).then(response => response.data);
}

export function fetchReviewers(movie_id) {
  const BASE_URL = 'https://api.themoviedb.org/3/';
  const API_KEY = 'a3f5e27baa2a1b83c70151e237938652';
  const url = `${BASE_URL}movie/${movie_id}/reviews?api_key=${API_KEY}&language=en-US`;

  return axios.get(url).then(response => response.data);
}
// export default { fetchFilms, fetchFilm };
