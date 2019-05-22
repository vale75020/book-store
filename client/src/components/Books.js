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
        <div key={book.id} style={{padding: "20px"}}>
          <h1>Title: {book.title}</h1>
          <h2>Author: {book.author}</h2>
          <img
            src={book.imageUrl}
            style={{ width: "300px", heigth: "400px" }}
            alt="book-img"
          />
          <p>Price: </p>
        </div>
      );
    });
    return <div>{bookList}</div>;
  }
}
