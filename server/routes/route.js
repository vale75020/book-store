const app = require('express')();
const data = require('../../booksList')
const cors = require("cors");

const User = require("../models/user-model")

app.get('/books', (req, res) => {
    res.status(200).json(data)
})

app.post('/login', (req, res) => {
    res.status(200).send("login success")
})

app.post('/register', (req, res) => {
    // creer un nouveau utilisateur
    const body = req.body; // données recus comme username et password console.log('body: ', body)
    if (body.email && body.password) {
    // condition pour eviter les objets vides comme un send sans parametres
    const newUser = {
      email: body.email,
      password: body.password
    };
    users.push(newUser); //pour ajouter l'user au tableau
    res.status(200).send(newUser);
    } else {
    res.status(412).send("Username and password are required fields");
    }
    res.status(200).send("register success")
})

app.get('/cart', (req, res) => {
    res.status(200).send("cart")
    //console.log(res)
})

module.exports = app