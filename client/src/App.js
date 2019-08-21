import React from 'react';
//import Home from './components/Home';
import Home from './components/Home';
import Login from './components/Login';
<<<<<<< HEAD
import Register from './components/Register';
import Navbar from './components/Navbar';
//import { withRouter, Switch, Route } from 'react-router-dom';
=======
import Register from './components/Register'
import Cart from './components/Cart'
import Navbar from './components/Navbar'

>>>>>>> 9e71c77b59357e7351dac9b87be04329fad59118
import { BrowserRouter as Router, Route } from "react-router-dom";


import './App.css';



function App() {
  return (
    <div>
    <Navbar /> 
    <Router>
<<<<<<< HEAD
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route  path="/login" component={Login} />
      <Route  path="/register" component={Register} />
    </div>
=======
      <div className="App">
        <Route exact path="/" component={Books} />
        <Route  path="/login" component={Login} />
        <Route  path="/register" component={Register} />
        <Route  path="/cart" component={Cart} />
      </div>
>>>>>>> 9e71c77b59357e7351dac9b87be04329fad59118
    </Router>
    </div>
  );
}

export default App;

