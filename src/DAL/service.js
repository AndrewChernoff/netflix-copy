const API_KEY = "648525cae8c4354c1d4c4dda01506e6b";
const BASE_URL = "https://api.themoviedb.org/3/";

const requests = {
  getMovies: `${BASE_URL}movie/550?api_key=${API_KEY}`,

  getTrendings: `${BASE_URL}trending/all/day?api_key=${API_KEY}`,

  getNetflixOriginals: `${BASE_URL}discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`,

  getTopRated: `${BASE_URL}movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`,

  getActionMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=28`,

  getComedyMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=35`,

  getHorrorMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=27`,

  getDocumentaries: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=99`,

  getRomanceMovies: `${BASE_URL}discover/movie?api_key=${API_KEY}&with_genres=10749`,
};

export default requests;
