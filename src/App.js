import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Signup}/>
            <Route path="/login" component={Login}/>
            <Route path="/home/:email" component={Home}/>
            <Route path="/welcome/:name" component={Welcome}/>
        </Switch>
    </Router>
  );
}

export default App;
