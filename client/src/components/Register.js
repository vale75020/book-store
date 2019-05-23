import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    err: "",
    userCreate: "",
    email: "",
    password: ""
  };

  handleOnSubmit = e => {
    // envoier à la bdd le mail et password
    e.preventDefault();

    this.setState({
      err: "",
      userCreate: ""
    });
    const newUser = {
      // new user
      email: this.state.email,
      password: this.state.password
    };
    axios
      .post("http://localhost:1407/register", newUser) // post pour registrer les données
      .then(response => {
        this.setState({
          userCreate: response.data.email, // confirmation creation user
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

              {this.state.userCreate ? (
                <div style={{ color: "black" }}>{`L'utilisateur ${
                  this.state.userCreate
                } a été crée`}</div>
              ) : (
                ""
              )}

              {this.state.err ? (
                <div style={{ color: "black" }}>{this.state.err}</div>
              ) : (
                ""
              )}
              <hr />
            </form>
          </div>
        </div>
    );
  }
}

export default Register;
