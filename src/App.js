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
        <Route exact path="/" Component={LecturesPage}/>
        <Route path="/upcoming-events" Component={Events}/>
        <Route path="/register" Component={Signin}/>
      </Switch>
    </Router>
   
  );
}

export default App;
