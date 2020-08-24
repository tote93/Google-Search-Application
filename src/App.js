import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./App.css";
/* import requests from "./request"; */
import Search from "./pages/Search";
import { useStateValue } from "./StateProvider";

import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  const [{ query }, dispatch] = useStateValue();
  /*useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        requests.fetchWeb + `&q=${query}&start=${currentPage}`
      );
      console.log(
        "https://www.googleapis.com/customsearch/v1" +
          requests.fetchWeb +
          `&q=${query}&start=${currentPage}`
      );
      console.log(request.data);
      return request;
    }
    //fetchData();
  }, []); */
  return (
    <BrowserRouter>
      <div className="app">
        <Switch>
          <Route exact path="/images">
            {query && <Navbar link="website" />}
            {!query && <Search urlLogo="https://i.imgur.com/gMaMeYJ.png" />}
          </Route>
          <Route path="/">
            {query && <Navbar link="images" />}
            {!query && <Search urlLogo="https://i.imgur.com/qb09Ntv.png" />}
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
