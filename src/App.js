import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import DetailMovie from "./pages/DetailMovie";

import ListGenres from "./pages/ListGenres";
import ListMovies from "./pages/ListMovies";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ListGenres} />
        <Route exact path="/movie" component={ListMovies} />
        <Route exact path="/movie/:id" component={DetailMovie} />
      </Switch>
    </Router>
  );
}

export default App;
