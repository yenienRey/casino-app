import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import "./App.css";

import Home from "./Home";
import SignIn from "./SignIn";

const App = function () {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/home" component={Home} />
        <Route exact path="/login" component={SignIn} />
        <Redirect from="/" to="/home" />
      </Switch>
    </div>
  );
};

export default App;
