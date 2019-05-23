const app = require("express")();
const data = require("../../booksList");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../models/user-model");

app.get("/books", (req, res) => {
  res.status(200).json(data);
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;

  if (email && password) {
    User.findOne({ email: email }, (err, user) => {
      if (err) console.log("err", err);
      if (user) {
        bcrypt.compare(password, user.password, (err, response) => {
          if (err) console.log("err", err);
          if (response) {
            jwt.sign(
              { user },
              "secretkey",
              { expiresIn: "300s" },
              (err, token) => {
                // user:user
                console.log("token", token);
                res.json({
                  token, // token: token
                  status: "login success"
                }); // post => res = token
              }
            );
          } else {
            res.status(412).send("invalid password");
          }
        });
      } else {
        res.status(400).send("invalid email");
      }
    });
  } else {
    res.status(412).send("email and password are required fields");
  }
});

app.post("/register", async (req, res) => {
  const { email, password } = req.body;

  // hasher les mots de passe
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt); // garde en mémoire le password req.body.password

  if (email && password) {
    const newUser = {
      email: email,
      password: hash
    };

//     User.findOne({ email: email }, (err, user) => {
//       if (err) {
//         console.log("err", err);
//       } else {
//         if (user) {
//           res.status(422).send(
//            "User already exists"
//           );
//         } else {
//           User.create(newUser, (err, response) => {
//             if (err) console.log(err);
//             res.status(200).send("user register with success");
//           });
//         }
//       }
//     });
//   } else {
//     res.status(412).send("email and password are required fields");
//   }
// });


    User.findOne({ email: email }, ( err, user ) => {
      if (!user) {
        User.create(newUser, (err, response) => {
          if (err) console.log(err);
          res.status(200).send({
            userMsg : "user register with success"
          });
        })
      } else {
          res.send({
            userMsg: "User already exists"
          })
        }
    })
   } else {
    res.status(412).send("email and password are required fields");
  }
});




app.get("/cart", (req, res) => {
  res.status(200).send("cart");
});

app.post("/cart", verifyToken, (req, res) => {
  jwt.verify(req.token, "secretkey", (err, authData) => {
    if (err) {
      res.sendStatus(403);
    } else {
      res.json({
        message: "User created",
        authData
      });
    }
  });
});

// Format of token
// Authorization: Bearer <access_token>

// Verify Token
function verifyToken(req, res, next) {
  // get auth header value - we send token in the header and verify authorization value
  const bearerHeader = req.headers["authorization"];
  // check if bearer is undefined
  if (typeof bearerHeader !== "undefined") {
    // Split at the space
    const bearer = bearerHeader.split(" ");
    // Get token from array
    const bearerToken = bearer[1];
    // Set the token
    req.token = bearerToken;
    // Next middleware
    next();
  } else {
    // Forbidden
    res.sendStatus(403);
  }
}

module.exports = app;
