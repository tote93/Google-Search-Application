import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Search from "./pages/Search";
import { Redirect, BrowserRouter, Route, Switch } from "react-router-dom";
import MenuOption from "./components/MenuOption";
import ImagesResults from "./components/ImagesResults";
import WebResults from "./components/WebResults";
import { useStateValue } from "./StateProvider";
function App() {
  const [{ query }, dispatch] = useStateValue();
  let redirectToUrl;
  if (!query) {
    //check condition
    redirectToUrl = <Redirect to={"/"} />;
  }
  return (
    <BrowserRouter>
      <div className="app">
        {redirectToUrl}
        <Switch>
          <Route exact path="/images">
            <MenuOption link={"websites"} />
            <Search link={"images"} urlLogo="https://i.imgur.com/gMaMeYJ.png" />
          </Route>
          <Route exact path="/websites">
            <MenuOption link={"images"} />
            <Search
              link={"websites"}
              urlLogo="https://i.imgur.com/qb09Ntv.png"
            />
          </Route>
          <Route exact path="/results/images">
            <Navbar />
            <ImagesResults />
          </Route>
          <Route exact path="/results/websites">
            <Navbar />
            <WebResults />
          </Route>
          <Route exact path="/">
            <MenuOption link={"images"} />
            <Search
              link={"websites"}
              urlLogo="https://i.imgur.com/qb09Ntv.png"
            />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
