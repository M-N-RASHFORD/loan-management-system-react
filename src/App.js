import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './Pages/Login';
import Signup from './Pages/Signup';
import Home from './Pages/Home';
import Welcome from './Pages/Welcome';
import AddLoans from './Pages/Loan_application_form';
import Loans from './Pages/Displayloans';

function App() {
  return (
    <Router>
        <Switch>
            <Route exact path="/" component={Loans}/>
            <Route path="/login" component={Login}/>
            <Route path="/home/:email" component={Home}/>
            <Route path="/welcome/:name" component={Welcome}/>
        </Switch>
    </Router>
  );
}

export default App;
