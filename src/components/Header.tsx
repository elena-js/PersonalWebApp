import NavBar from "./NavBar";
import LanguageDropdown from "./LanguageDropdown";
import photo from '../assets/photo.jpg';
import '../styles/Header.css';

function Header() {
    return (
        <header>
            <div className="header-top">
            <img src={photo} alt="Elena Juana Serrano" />
            <h4>Elena <br />Juana Serrano</h4>
            <NavBar />
            <LanguageDropdown />
            </div>
        </header>
    );
}

export default Header;