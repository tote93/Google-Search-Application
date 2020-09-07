import React, { useEffect, useState } from "react";
import axios from "../axios";
import requests from "../request";
import { useStateValue } from "../StateProvider";
import WebBuilder from "./WebBuilder";
import Pagination from "./Pagination";
import SearchInformationResults from "./SearchInformationResults";
function WebResults() {
  const [{ query, currentPage }, dispatch] = useStateValue();
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchWeb + `&q=${query}&start=${currentPage}`
      );
      console.log(request.data);
      dispatch({
        type: "SET_SEARCH_RESULTS",
        webs: request.data.items,
        totalTime: request.data.searchInformation.formattedSearchTime,
        totalResults: request.data.searchInformation.formattedTotalResults,
      });

      return request;
    }
    fetchData();
  }, [query, currentPage]);
  return (
    <div className="container">
      <SearchInformationResults />
      <WebBuilder />
      <Pagination />
    </div>
  );
}

export default WebResults;
