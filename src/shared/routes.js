import { Route, DefaultRoute, NotFoundRoute } from "react-router";
import React from "react";

import App from "./components/AppHandler";
import About from "./components/About";
import NotFound from "./components/NotFound";
import Dashboard from "./components/Dashboard";

export default (
  <Route name="app" path="/" handler={App}>
    <Route name="about" handler={About}/>
    <Route name="dashboard" handler={Dashboard}/>
    <DefaultRoute name="home" handler={Dashboard}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);
