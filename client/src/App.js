import React from 'react';
import Books from './components/Books';
import Login from './components/Login';

import { BrowserRouter as Router, Route } from "react-router-dom";

import './App.css';

function App() {
  return (
    <Router>

    <div className="App">
      <Route exact path="/" component={Books} />
      <Route exact path="/login" component={Login} />
    </div>

    </Router>
  );
}

export default App;
