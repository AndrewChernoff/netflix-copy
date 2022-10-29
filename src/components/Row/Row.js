import axios from "axios";
import { useEffect, useState } from "react";
import "./Row.css";

const Row = ({ title, fetchMovies }) => {
  const [movies, setMovies] = useState([]);

  const getData = async () => {
    let res = await axios.get(fetchMovies);
    return res;
  };

  useEffect(() => {
    getData().then((res) => setMovies(res.data.results));
  }, []);
  console.log(movies);

  return (
    <div className="row">
      <h2 className="row__title">{title}</h2>
      <div className="row__movies">
        {movies ? (
          movies?.map((el) => {
            return (
              <div className="row__movies_item">
                <img
                  key={el.id}
                  className="row__img"
                  src={`https://image.tmdb.org/t/p/original/${el.backdrop_path}`}
                />
                <div className="row__movie_title">{el.original_title}</div>
              </div>
            );
          })
        ) : (
          <div>Loading...</div>
        )}
      </div>
    </div>
  );
};

export default Row;
