import React, { useEffect } from "react";
import axios from "../axios";
import requests from "../request";
import { useStateValue } from "../StateProvider";
import WebBuilder from "./WebBuilder";
import Pagination from "./Pagination";
function WebResults() {
  const [{ query, currentPage }, dispatch] = useStateValue();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchWeb + `&q=${query}&start=${currentPage}`
      );
      dispatch({
        type: "SET_SEARCH_RESULTS",
        webs: request.data.items,
      });
      console.log(request.data.items);
      return request;
    }
    fetchData();
  }, [query, currentPage]);
  return (
    <div className="container">
      <WebBuilder />
      <Pagination />
    </div>
  );
}

export default WebResults;
