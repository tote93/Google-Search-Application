import React from "react";
import SearchNavBar from "./SearchNavbar";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import SearchNavbar from "./SearchNavbar";
function Navbar({ link }) {
  return (
    <div className="navbar">
      <img
        className="navbar__image"
        src="https://i.imgur.com/qb09Ntv.png"
        alt="Google Logo"
      />
      <SearchNavbar className="navbar__search"/>
      <div className="navbar__options">
        <Link to={`/${link}`} className="navbar__link">
          {link}
        </Link>
        <img
          src="https://c7.uihere.com/files/981/645/182/united-states-computer-icons-desktop-wallpaper-clip-art-free-high-quality-person-icon.jpg"
          alt="profile user"
          className="navbar__userPhoto"
        />
      </div>
    </div>
  );
}

export default Navbar;
