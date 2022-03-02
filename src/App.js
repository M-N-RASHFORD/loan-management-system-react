import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/home" component={Home}/>
        </Switch>
    </Router>
  );
}

export default App;
