import netflixLogo from '../../utils/imgs/netflix.png';
import netflixAva from '../../utils/imgs/avatar.png';
import './Nav.css';

const Nav = () => {
    return <div className="nav">
        <div className="nav__content">
            <img src={netflixLogo} className="nav__logo" alt="netflix logo"/>
            <img src={netflixAva} className="nav__ava" alt="netflix avatar"/>
        </div>
    </div>
}

export default Nav