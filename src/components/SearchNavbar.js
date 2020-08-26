import React, { useState } from "react";
import "./styles/SearchNavbar.css";
import SearchIcon from "@material-ui/icons/Search";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import { Link } from "react-router-dom";
import { useStateValue } from "../StateProvider";
function SearchNavbar() {
  const [{ query }, dispatch] = useStateValue();
  const [inputQuery, setInputQuery] = useState("");

  const dispatchAction = () => {
    if (inputQuery) {
      dispatch({
        type: "SET_QUERY",
        query: inputQuery,
      });
    }
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatchAction();
    }
  };
  return (
    <div className="searchNavbar">
      <input
        onChange={(e) => setInputQuery(e.target.value)}
        className="searchNavbar__input"
        type="text"
        placeholder="Search..."
        onKeyPress={handleKeyPress}
        autoFocus
        defaultValue={query}
      />
      <div className="searchNavbar__links">
        <SearchIcon className="searchNavbar__icon" />
        <Link className="searchNavbar__link" to="/results/websites">
          All
        </Link>
        <ImageOutlinedIcon className="searchNavbar__icon" />
        <Link className="searchNavbar__link" to="/results/images">
          Images
        </Link>
      </div>
    </div>
  );
}

export default SearchNavbar;
