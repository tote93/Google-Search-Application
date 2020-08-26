import React from "react";
import { useState } from "react";
import { useStateValue } from "../StateProvider";
import "./styles/Pagination.css";

function Pagination() {
  const [pages, setPages] = useState(
    Array.from({ length: 5 }, (_, k) => k + 1)
  );

  const [
    { currentPage, imagesResults, webResults },
    dispatch,
  ] = useStateValue();

  const handleClick = (e) => {
    let lastElement = pages[pages.length - 1];
    const value = parseInt(e.target.id);
    // If is equal, means that have to change the array links
    if (value === lastElement) {
      const initNumber = parseInt(lastElement - 5 / 2);
      lastElement += 5;
      const length = lastElement - initNumber;
      const newPages = Array.from({ length }, (_, i) => initNumber + i);
      setPages(newPages);
    }
    dispatch({
      type: "SET_PAGE",
      page: value,
    });
  };
  return (
    <div className="pagination">
      {(imagesResults || webResults) &&
        pages?.map((n, i) => {
          return n * 10 + 1 === currentPage ? (
            <button
              className="pagination__button"
              key={i}
              id={n}
              disabled
              onClick={handleClick}
            >
              {n}
            </button>
          ) : (
            <button
              className="pagination__button"
              key={i}
              id={n}
              onClick={handleClick}
            >
              {n}
            </button>
          );
        })}
    </div>
  );
}

export default Pagination;
