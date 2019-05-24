import React, { Component } from "react";
import axios from "axios";
import Counter from './Counter'

export default class Books extends Component {
  state = {
    books: [],
    cart: []
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

  addToCart = (book) => {
    const copyCart = this.state.cart;

    copyCart.push(book);

    this.setState({ cart: [...copyCart] });

    localStorage.setItem('mon panier', JSON.stringify(copyCart))
  }

  render() {
    const bookList = this.state.books.map((book,i) => {
      return (
        <div key={book.id} style={{ padding: "20px", textAlign: "center" }}>
          <h2>{book.title}</h2>
          <h3>Author: {book.author}</h3>
          <div style={{ width: "188px", height: "320px", margin:"0 auto"}}>
          <img
            src={book.imageUrl}
            style={{ width: "100%", verticalAlign: "top"}}
            alt="book-img"
          />
          </div>
          <Counter />
          <p>Price: {book.price}$</p>
          {/* <button onClick={() => this.addToCart(book)}>add to cart</button> */}
          <button onClick={() => this.addToCart(book)} style={{fontSize:"20px"}}>Add to Cart <i class="fa fa-shopping-cart"></i></button>
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
