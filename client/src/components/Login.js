import React, { Component } from "react";
import axios from 'axios'
import { Redirect } from 'react-router-dom';

class Login extends Component {

  state = {
    redirect: false,
    email:"",
    password:"",
    msgBack: false,
    userMsg: '',
  }

  login = () => {
    axios.post('http://localhost:1407/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      console.log(response)
      localStorage.setItem('token', response.data.token)

      this.setState({ redirect: true }) 
    })
    .catch((error) =>  {
      console.log(error.response.data.userMsg);
      this.setState({ msgBack: true, userMsg: error.response.data.userMsg })
    });
    this.setState({  // reinitializer inputs
      email:"",
      password:""
    })
  }

  isLoginRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/'/>
    }
  }
 
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  render() {
    return (    
      <div className="login">
          <h1>Login</h1>
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
        {this.state.userMsg}
        <button className="buttonLogin" onClick={this.login}>LOGIN</button>
        {this.isLoginRedirect()}
      </div>
    );
  }
}

export default Login;