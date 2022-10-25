import banner from '../../utils/imgs/banner.png';
import Nav from '../Nav/Nav';
import './Banner.css';
import { useEffect, useState } from 'react';
import requests from '../../DAL/service';
import axios from 'axios';

const Banner = () => {

    const [movie, setMovie] = useState(null);
    const {getNetflixOriginals} = requests();

    useEffect(() => {
        getNetflixOriginals().then((res) => setMovie(res.data.results[Math.floor(Math.random()*(res.data.results).length)]))
    }, [])

    /* const cutString = (str) => {
        if(str.length > 30) {
            return str.substr(0,30) + '...';
        } else {
            return str;
        }
    } */

    return <header className="banner" style={{
        backgroundSize: 'cover',
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${movie?.backdrop_path}')`,
        backgroundPosition: 'center 0',
    }}>
        <Nav/>

        <div className="banner__content">

        <h1 className="banner__title">
        {movie?.original_title}
        </h1>
        <div className="banner__buttons">
            <button className="banner__button">Play</button>
            <button className="banner__button">My list</button>
        </div>

        <h1 className="banner__descr">
        {/* {cutString(movies?.original_title)} */}
        {movie?.overview.length > 85 ? movie?.overview.substr(0,85) + '...' : movie?.overview}
        </h1>
        </div>
        {/* <div className="banner--fadeBottom"/> */}
    </header>
}

export default Banner;