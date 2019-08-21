import React, { Component } from 'react';

class Cart extends Component {
	state = { 
		cart : JSON.parse(localStorage.getItem('mon panier')) || []
	}

	checkIsLogin = () => {
		const check = localStorage.getItem('token')
		if (!!check) { // autre façon de faire la condition check.length > 0
			return alert('redirect for pay')
		} else {
			return alert('Please login mother fucker')
		}
	}

	totalCart = () => {
		const total = this.state.cart.map(bookPrice => parseInt(bookPrice.price))
		const reducer = (accumulator, currentValue) => accumulator + currentValue;
		return total.reduce(reducer, 0)
	}

	render() { 
		return (
			<div>
				<div style={{ display: 'flex', justifyContent: 'space-around' }}>
				{
					 this.state.cart.map((book,i) => {
						return (
						<div key={i} style={{ padding: "20px", textAlign: "center" }}>
							<h2>{book.title}</h2>
							<h3>Author: {book.author}</h3>
							<div style={{ width: "188px", height: "320px", margin:"0 auto"}}>
							<img
								src={book.imageUrl}
								style={{ width: "100%", verticalAlign: "top"}}
								alt="book-img"
							/>
							</div>
							<p>Price: {book.price}$</p>
        		</div>
						)
					})
				}
				</div>
				<h3>Total : {this.totalCart()}</h3>
				<button onClick={this.checkIsLogin}>check out</button>
			</div>
		)
	}
}
 
export default Cart;
