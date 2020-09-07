import React from "react";
import "./styles/SearchInformationResults.css";
import { useStateValue } from "../StateProvider";

function SearchInformationResults() {
  const [{ totalTime, totalResults }, dispatch] = useStateValue();
  return (
    <div className="SearchInformationResults">
      <p className="SearchInformationResults__info">
        Approximately {totalResults} results ({totalTime} seconds)
      </p>
    </div>
  );
}

export default SearchInformationResults;
