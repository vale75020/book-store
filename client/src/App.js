import React from 'react';
//import Home from './components/Home';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import Navbar from './components/Navbar';
//import { withRouter, Switch, Route } from 'react-router-dom';
import { BrowserRouter as Router, Route } from "react-router-dom";


import './App.css';



function App() {
  return (
    <div>
    <Navbar /> 
    <Router>
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route  path="/login" component={Login} />
      <Route  path="/register" component={Register} />
    </div>
    </Router>
    </div>
  );
}

export default App;

