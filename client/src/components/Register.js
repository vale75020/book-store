import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    userExist: false,
    successUser: false,
    errMsg: '',
    email: "",
    password: ""
  };

  handleOnSubmit = e => {
    // envoier à la bdd le mail et password
    e.preventDefault();

    this.setState({
      err: "",
      successUser: ""
    });
    const newUser = {
      // new user
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("http://localhost:1407/register", newUser) // post pour registrer les données
      .then(response => { 
        console.log(response)
        this.setState({
          successUser: true, // confirmation creation user
          errMsg: response.data.userMsg,
          email: "",
          password: ""
        });
      })
      .catch(err => {
        console.log("in error", err);
        this.setState({ err: 'L"utilisateur existe deja' });
      });
  };

  handleOnChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return ( 
        <div className="wrapper">
          <div className="register">
            <h1 className="reg">Register New User</h1>
            <form onSubmit={this.handleOnSubmit}>
              <input
                className="registerInput"
                name="email"
                type="text"
                placeholder="enter email"
                value={this.state.email}
                onChange={this.handleOnChange}
                required
              />
              <input
                className="registerInput"
                name="password"
                type="password"
                placeholder="enter password"
                value={this.state.password}
                onChange={this.handleOnChange}
                required
              />
              <button type="submit" className="buttonRegister">
                Register
              </button>

              {this.state.successUser ? (
                <div style={{ color: "black" }}>{this.state.errMsg}</div>
                ) : ''
              }
            {/* //   {this.state.userExist ? (
            //     <div style={{ color: "black" }}>{this.state.errMsg}</div>
            //   ) : (
            //     ""
            //   )} */}

              <hr />
            </form>
          </div>
        </div>
    );
  }
}

export default Register;
