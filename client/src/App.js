import React from 'react';
import Books from './components/Books';
import Login from './components/Login';
import Register from './components/Register'

import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>

    <div className="App">
      <Route exact path="/" component={Books} />
      <Route  path="/login" component={Login} />
      <Route  path="/register" component={Register} />
    </div>

    </Router>
  );
}

export default App;
