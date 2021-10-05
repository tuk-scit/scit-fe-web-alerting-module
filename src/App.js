import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./Pages/EventsPage";
import LecturePage from "./Pages/LecturePage";
import Signin from "./Pages/SignIn";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LecturePage} />
        <Route path="/upcoming-events" component={Events} />
        <Route path="/register" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
