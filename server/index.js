const app = require('express')();
const cors = require('cors');

let port = 1407

app.use(cors())


app.listen(port, () => {
    console.log("server is running on port: " + port)
})