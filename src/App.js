import React from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import LecturesPage from "./Pages/LecturesPage"
import Events from './Pages/Events'
import Signin from './Pages/SignIn'
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={LecturesPage}/>
        <Route path="/upcoming-events" component={Events}/>
        <Route path="/register" component={Signin}/>
      </Switch>
    </Router>
   
  );
}

export default App;
