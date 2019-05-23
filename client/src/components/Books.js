import React, { Component } from "react";
import axios from "axios";

export default class Books extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    axios
      .get("http://localhost:1407/books")
      .then(response => {
        // handle success
        console.log(response.data.content);
        this.setState({
          books: response.data.content
        });
      })
      .catch(function(error) {
        // handle error
        console.log("err", error);
      });
  }

  render() {
    //console.log(this.state.books)

    const bookList = this.state.books.map(book => {
      return (
        <div key={book.id} style={{ padding: "20px", textAlign: "center" }}>
          <h2>{book.title}</h2>
          <h3>Author: {book.author}</h3>
          <img
            src={book.imageUrl}
            style={{ width: "225px", heigth: "300px" }}
            alt="book-img"
          />
          <p>Price: </p>
        </div>
      );
    });
    return (
      <div>
        <h1
          style={{ textAlign: "center", padding: "20px", color: "deepskyblue" }}
        >
          Welcome to my BookStore
        </h1>
        <div className="container">{bookList}</div>
      </div>
    );
  }
}
