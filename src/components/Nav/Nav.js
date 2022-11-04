import netflixLogo from '../../utils/imgs/netflix.png';
import netflixAva from '../../utils/imgs/avatar.png';
import './Nav.css';
import { Link } from 'react-router-dom';

const Nav = () => {
    return <div className="nav">
        <div className="nav__content">
            <Link to="/homepage">
            <img src={netflixLogo} className="nav__logo" alt="netflix logo"/>
            </Link>
            <Link to="/dashboard">
            <img src={netflixAva} className="nav__ava" alt="netflix avatar"/>
            </Link>
        </div>
    </div>
}

export default Nav