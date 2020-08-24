import React from "react";
import "./styles/SearchNavbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { Link } from "react-router-dom";
function SearchNavbar() {
  return (
    <div className="searchNavbar">
      <input type="text" className="searchNavbar__input" />
      <div className="searchNavbar__links">
        <SearchIcon className="searchNavbar__icon" />
        <Link className="searchNavbar__link" to="/websites">
          All
        </Link>
        <ImageOutlinedIcon className="searchNavbar__icon" />
        <Link className="searchNavbar__link" to="/images">
          Images
        </Link>
      </div>
    </div>
  );
}

export default SearchNavbar;
