const app = require("express")();
const cors = require("cors");
const data = require("./booksList.json");
const Route = require("./server/routes/route");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const port = 1407;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", Route);

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

mongoose.connect("mongodb://localhost:27017/bookStore", {
  useNewUrlParser: true
});
const db = mongoose.connection;
    db.on("error", console.error.bind(console, "connection error:"));
    db.once("open", function() {
    console.log("Connected MongoDB !");
});

app.listen(port, () => {
  console.log("server is running on port: " + port);
});
