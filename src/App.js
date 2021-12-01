import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Events from "./Pages/EventsPage";
import LecturePage from "./Pages/LecturePage";
// import Signin from "./Pages/SignIn";
import "./App.css";
import Register from "./Pages/Register";
import Lost from "./Pages/Lost";
import Footer from "./Layout/Footer";
import Header from "./Layout/Header";

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Register} />
        <Route path="/upcoming-events" component={Events} />
        {/* <Route path="/register" component={Signin} /> */}
        <Route path="/register" component={Register} />
        <Route path="/upcoming-lectures" component={LecturePage} />
        <Route component={Lost} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
