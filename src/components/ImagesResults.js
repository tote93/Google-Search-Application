import React, { useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import { useStateValue } from "../StateProvider";
import Pagination from "./Pagination";
import ImagesBuilder from "./ImagesBuilder";

function ImagesResults() {
  const [{ query, currentPage }, dispatch] = useStateValue();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchWeb + `&q=${query}&start=${currentPage}&searchType=image`
      );
      dispatch({
        type: "SET_SEARCH_RESULTS",
        images: request.data.items,
      });
      return request;
    }
    fetchData();
  }, [currentPage, query]);
  return (
    <div className="container">
      <ImagesBuilder />
      <Pagination />
    </div>
  );
}

export default ImagesResults;
