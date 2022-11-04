import { useEffect } from "react";
import requests from "../../DAL/service";
import Banner from "../Banner/Banner";
import Nav from "../Nav/Nav";
import Row from "../Row/Row";

const HomePage = () => {
    /* useEffect(() => {
        console.log('mount')
    },[]) */
    return <div>
         {/* <Nav/> */}
        <Banner/>
        <Row title="Trending Now" fetchMovies={requests.getTrendings}/>
        <Row title="Top Rated" fetchMovies={requests.getTopRated}/>
        <Row title="Action Movies" fetchMovies={requests.getActionMovies}/>
        <Row title="Comedy Movies" fetchMovies={requests.getComedyMovies}/>
        <Row title="Horror Movies" fetchMovies={requests.getHorrorMovies}/>
        <Row title="Romance Movies" fetchMovies={requests.getRomanceMovies}/>
        <Row title="Documentaries" fetchMovies={requests.getDocumentaries}/>
    </div>
}

export default HomePage;