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
    isLogged: false
  }

  login = () => {
    axios.post('http://localhost:1407/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      localStorage.setItem('token', response.data.token)

      this.setState({ redirect: true, isLogged: true }) 
    })
    .catch((error) =>  {
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
          className="form-control my-3"
          type="text"
          name="email"
          placeholder="enter your email"
          required
        />
        <input
          onChange={this.handleChange}
          value= {this.state.password}
          className="form-control my-3"
          name="password"
          type="password"
          placeholder="enter your password"
          required
        />
<<<<<<< HEAD
        <button className="btn btn-primary float-right" onClick={this.login}>{this.state.isLogged ? 'Login' : 'Login'}</button>
=======
        <button className="buttonLogin" onClick={this.login}>{this.state.isLogged ? 'Login' : 'Logout'}</button>
>>>>>>> 9e71c77b59357e7351dac9b87be04329fad59118
        {this.isLoginRedirect()}
        <hr style={{width: "100%",margin:"0 auto"}}/>
              <br/>
              {this.state.userMsg}
      </div>
    );
  }
}

export default Login;