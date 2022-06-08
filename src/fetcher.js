import axios from "axios";

const API_KEY = "?api_key=2d4363cfa1085821f68ee453793ef363";

const API_URL = "https://api.themoviedb.org/3/";

const callAxios = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-type": "application/json",
  },
});

const getPopularMovies = () => {
  return callAxios.get("/movie/popular" + API_KEY);
};

const getMovieGenres = () => {
  return callAxios.get("/genre/movie/list" + API_KEY);
};

const searchMoviesby = (keyword) => {
  return callAxios.get("/search/movie" + API_KEY + "&query=" + keyword);
};

export { getPopularMovies, getMovieGenres, searchMoviesby };
