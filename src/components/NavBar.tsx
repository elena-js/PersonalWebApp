import { useTranslation } from 'react-i18next';
import { NavLink, Link } from "react-router-dom";
import IconHome from "../assets/icon_home.svg?react";
import '../styles/NavBar.css'

function NavBar() {
  const { t } = useTranslation();

  return (
    <div className="nav-container">
      <Link to="/" className="home-button" aria-label="Home">
        <IconHome className="icon" />
      </Link>
      <nav className="navbar">
        <ul>
          <li>
            <NavLink to="/about" className={({ isActive }) => isActive ? "active" : ""}>
              {t("navbar.about")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/work-experience" className={({ isActive }) => isActive ? "active" : ""}>
              {t("navbar.work")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/education" className={({ isActive }) => isActive ? "active" : ""}>
              {t("navbar.education")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/skills" className={({ isActive }) => isActive ? "active" : ""}>
              {t("navbar.skills")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/projects" className={({ isActive }) => isActive ? "active" : ""}>
              {t("navbar.projects")}
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact" className={({ isActive }) => isActive ? "active" : ""}>
              {t("navbar.contact")}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;