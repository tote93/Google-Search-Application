import React from "react";
import "./styles/Navbar.css";
import { Link } from "react-router-dom";
import SearchNavbar from "./SearchNavbar";
function Navbar({ link }) {
  return (
    <div className="navbar">
      <Link to="">
        <img
          className="navbar__image"
          src="https://i.imgur.com/qb09Ntv.png"
          alt="Google Logo"
        />
      </Link>
      <SearchNavbar className="navbar__search" />
    </div>
  );
}

export default Navbar;
