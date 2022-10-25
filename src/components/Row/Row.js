import { useEffect, useState } from "react";

const Row = ({title, fetchMovies}) => {

    const [movies, setMovies] = useState([]);
    console.log(fetchMovies)

    useEffect(() => {
        /* fetchMovies
        .then(res => setMovies(res)) */
    }, [])

    return <div className="row">
        <h1>{title}</h1>
    </div>
}

export default Row;