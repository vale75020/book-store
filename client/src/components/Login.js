import React, { Component } from "react";
import axios from 'axios'

class Login extends Component {

  state = {
    username:"",
    password:""
  }

  login = () => {

    axios.post('http://localhost:1407/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {

      console.log(error);
    });
    this.setState({  // reinitializer inputs
      email:"",
      password:""
    })
  }
 
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (
      <div className="login">
        <input
          onChange={this.handleChange}
          value= {this.state.email}
          className="loginInput"
          type="text"
          name="email"
          placeholder="enter your email"
          required
        />
        <input
          onChange={this.handleChange}
          value= {this.state.password}
          className="loginInput"
          name="password"
          type="password"
          placeholder="enter your password"
          required
        />
        <button onClick={this.login}>LOGIN</button>
      </div>
    );
  }
}

export default Login;