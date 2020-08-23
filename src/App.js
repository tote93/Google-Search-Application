import React, { useState, useEffect } from "react";
import axios from "./axios";
import "./App.css";
/* import requests from "./request"; */
import Search from "./pages/Search";
/* import { useStateValue } from "./StateProvider"; */

import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  /*   const [{ query, currentPage }, dispatch] = useStateValue();
  useEffect(() => {
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
            <Search urlLogo="https://i.imgur.com/gMaMeYJ.png" />
          </Route>
          <Route exact path="/images/search/">
            <h1>images id</h1>
          </Route>
          <Route exact path="/website">
            <h1>Webs</h1>
          </Route>
          <Route path="/">
            <Search urlLogo="https://www.google.es/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
