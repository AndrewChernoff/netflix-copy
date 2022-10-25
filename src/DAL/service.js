import axios from "axios";

const API_KEY = "648525cae8c4354c1d4c4dda01506e6b";

const requests = () => {
  const getMovies = async() => {
   let res = await axios.get(`https://api.themoviedb.org/3/movie/550?api_key=${API_KEY}`);
    return res;
  } 

  const getTrendings = async() => {
    let res = await axios.get(`https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`);
    return res;
  }
  
  const getNetflixOriginals = async() => {
    let res = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_watch_monetization_types=flatrate`);
    return res;
}

const getTopRated = async() => {
    let res = await axios.get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`);
    return res;
}

const getActionMovies = async() => {
    let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`);
    return res;
}

const getComedyMovies = async() => {
    let res = await axios.get(
        `https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`
      );
      return res;
}

const getHorrorMovies = async() => {
    let res = axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`);
    return res;
}

const getDocumentaries = async() => {
    let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=99`);
    return res;
}

const getRomanceMovies = async() => {
    let res = await axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`);
    return res;
}

  return { getMovies, getTrendings, getNetflixOriginals, getTopRated, getActionMovies,
    getComedyMovies, getHorrorMovies, getDocumentaries, getRomanceMovies
 };
};

export default requests;
