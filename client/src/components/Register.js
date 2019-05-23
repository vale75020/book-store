import React, { Component } from "react";
import axios from "axios";

class Register extends Component {
  state = {
    msgBack: false,
    userMsg: '',
    email: "",
    password: ""
  };

  handleOnSubmit = e => {
    // envoier à la bdd le mail et password
    e.preventDefault();

    this.setState({
      err: "",
      msgBack: ""
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
          msgBack: true, // confirmation creation user
          userMsg: response.data.userMsg,
          email: "",
          password: ""
        });
      })
      .catch(err => {
        this.setState({    
          msgBack: true, // confirmation creation user
          userMsg: err.response.data.userMsg})
        //console.log("in error", err.response.data.userMsg);
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

              {this.state.userMsg}
              <hr style={{width: "90%",margin:"0 auto"}}/>
            </form>
          </div>
        </div>
    );
  }
}

export default Register;
