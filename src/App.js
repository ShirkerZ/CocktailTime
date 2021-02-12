import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./CSS/main.css";
import Nav from "./components/Nav";
import Form from "./components/Form";
import Cocktails from "./components/Cocktails";
import Details from "./components/Details";
import Footer from "./components/Footer";
import Info from "./components/Info";

function App() {
  const [cocktails, setCocktails] = useState([]);

  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact>
            <Form setCocktails={setCocktails} />
            <Info cocktails={cocktails} />
            <Cocktails cocktails={cocktails} />
          </Route>

          <Route path="/:id" exact render={props =>(<Details {...props} cocktails={cocktails} />)} />

        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
