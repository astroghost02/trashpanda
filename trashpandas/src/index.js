import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch, withRouter, Redirect } from "react-router-dom";
import reportWebVitals from './reportWebVitals';

import App from './webpages/App';
import Login from './webpages/Login';
import SignUp from './webpages/SignUp';
import Action from './webpages/Action';

import './cssFile.scss';

ReactDOM.render(
    <Router>

      <Route path="/home" component={App} />
      <Route path="/login" component={Login} />
      <Route path="/signup" component={SignUp} />
      <Route path="/action" component={Action} />

      <Route exact path="/">
        <Redirect to="/home" />
      </Route>

    </Router>
    ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
