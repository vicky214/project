import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import './App.css';
import Signup from './components/signup/Signup';
import Login from './components/login/Login';
import Company from './components/Company/Company';
import Header from './components/header/Header';
import ReactNotification from 'react-notifications-component'
import 'react-notifications-component/dist/theme.css'

function App() {
  return (
    <BrowserRouter>
        <ReactNotification />
        <Header />
      <Switch>
        <Route exact path="/" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/company" component={Company} />

        </Switch>
    </BrowserRouter>
  );
}

export default App;
