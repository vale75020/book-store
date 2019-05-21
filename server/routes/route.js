const app = require('express')();
const data = require('../../booksList')
const cors = require("cors");

// const User = require("../models/user-model")

app.get('/books', (req, res) => {
    res.status(200).json(data)
})

app.post('/login', (req, res) => {
    res.status(200).send("login success")
    
})

app.post('/register', (req, res) => {
    res.status(200).send("register success")
})

app.get('/cart', (req, res) => {
    res.status(200).send("cart")
    //console.log(res)
})

module.exports = app