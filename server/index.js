const app = require('express')();
const cors = require('cors');
const data = require('../booksList.json')
const Route = require('./routes/route')

let port = 1407

app.use(cors())


app.use('/', Route )

// app.get('/', (req, res) => {
//     res.status(200).json(data)
// })

// app.post('/login', (req, res) => {
//     res.status(200).send("login success")
// })

// app.post('/register', (req, res) => {
//     res.status(200).send("register success")
// })

// app.get('/cart', (req, res) => {
//     res.status(200).send("cart")
// })


app.listen(port, () => {
    console.log("server is running on port: " + port)
})