const app = require("express")();
const data = require("../../booksList");
const bcrypt = require('bcrypt');

const User = require("../models/user-model");

app.get("/books", (req, res) => {
  res.status(200).json(data);
});

app.post("/login", (req, res) => {
	const { email, password } = req.body;

	if (email && password) {
		User.findOne({ email: email }, (err, user) => {
			if (err) console.log('err', err)
			if (user) {
				bcrypt.compare(password, user.password, (err, response) => {
					if (err) console.log('err', err)
					if (response) {
						res.status(200).send('login success')
					} else {
						res.status(412).send('invalid password')
					}
				})
			} else {
				res.status(400).send("invalid email");
			}
		})
	} else {
		res.status(412).send("email and password are required fields");
	}
});

app.post("/register", async (req, res) => {
	const { email, password } = req.body;

	// hasher les mots de passe
	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(password, salt)
	
  if (email && password) {
    const newUser = {
      email: email,
      password: hash
		};

    User.create(newUser, (err, res) => {
      if (err) console.log(err);
		});
		
    res.status(200).send("user register with success");
  } else {
    res.status(412).send("email and password are required fields");
  }
});

app.get("/cart", (req, res) => {
  res.status(200).send("cart");
});

module.exports = app;
