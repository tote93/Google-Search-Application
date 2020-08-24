import React from "react";
import "./styles/Search.css";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
import SearchIcon from "@material-ui/icons/Search";

function Search({ urlLogo }) {
  const [inputQuery, setInputQuery] = useState("");
  const [{}, dispatch] = useStateValue();

  const dispatchAction = () => {
    if (inputQuery) {
      dispatch({
        type: "SET_QUERY",
        query: inputQuery,
      });
    }
  };

  const handleClick = () => {
    // Dispatch the event when query is not empty
    dispatchAction();
  };
  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      dispatchAction();
    }
  };
  return (
    <div className="search">
      <div className="search__imageLogo">
        <img src={urlLogo} alt="Google Logo" className="search__logo" />
      </div>
      <div className="search__contentForm">
        <div className="search__form">
          <SearchIcon className="search__icon" />
          <input
            onChange={(e) => setInputQuery(e.target.value)}
            value={inputQuery}
            className="search__input"
            type="text"
            placeholder="Search..."
            onKeyPress={handleKeyPress}
            autoFocus
          />
        </div>
        <button onClick={handleClick} className="search__buttonSearch">
          Search in Google
        </button>
      </div>
    </div>
  );
}

export default Search;
