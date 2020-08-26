import React from "react";
import { Link } from "react-router-dom";
import "./styles/MenuOption.css";

function MenuOption({ link }) {
  return (
    <div className="menuOption">
      <Link to={`/${link}`} className="menuOption__link">
        {link}
      </Link>
      <img
        src="https://c7.uihere.com/files/981/645/182/united-states-computer-icons-desktop-wallpaper-clip-art-free-high-quality-person-icon.jpg"
        alt="profile user"
        className="menuOption__userPhoto"
      />
    </div>
  );
}

export default MenuOption;
