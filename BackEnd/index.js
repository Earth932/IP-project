const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const bcrypt = require("bcrypt");
const saltRounds = 10;
const jwt = require("jsonwebtoken");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST"],
    credentials: true,
  })
);
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  session({
    key: "id",
    secret: "Secret",
    resave: false,
    saveUninitialized: false,
    cookie: {
      expires: 60 * 60 * 24,
    },
  })
);

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ip_project',
})

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log('MySQL successfully connected!');
})

// AUTH
const verifyJWT = (req, res, next) => {
    const token = req.headers["x-access-token"]
    if (!token) {
        res.send("Need token.");
    } else {
        jwt.verify(token, "Secret", (err, decoded) => {
            if (err) {
                res.json({ auth: false, message: "Fail authen."});
            } else {    
                req.id = decoded.id;
                next();
            }
        });
    }
};

app.get("/auth", verifyJWT, (req, res) => {
    res.send("Authen success.")
});

// LOGIN
app.get("/login", (req, res) => {
    if (req.session.users) {
      res.send({ loggedIn: true, users: req.session.users });
    } else {
      res.send({ loggedIn: false });
    }
  });
  
app.post("/login", (req, res) => {
    const { email, password } = req.body;
  
    connection.query(
      "SELECT * FROM users WHERE email = ?;",
      email,
      (err, result) => {
        if (err) {
          res.send({ err: err });
        }
  
        if (result.length > 0) {
          bcrypt.compare(password, result[0].password, (error, response) => {
            if (response) {
                const id = result[0].id
                const token = jwt.sign({id}, "Secret", {
                    expiresIn: 300,
                }); 
                req.session.users = result;
                res.json({ auth: true, token: token, result: result});
            } else {
                res.json({ auth: false, message: "Wrong email/password.", });
            }
          });
        } else {
          res.json({ auth: false, message: "No user." });
        }
      }
    );
  });

// REGISTER
app.post("/register", async (req, res) => {
    const { firstname , lastname , id_card , email, password 
        , address , sub_district , district , province , postal_code 
        , tel } = req.body;
    bcrypt.hash(password, saltRounds, (err, hash) => {
        if (err) {
            console.log(err)
        }
        try {
            connection.query(
                "INSERT INTO users(firstname , lastname , id_card , email, password , address , sub_district , district , province , postal_code , tel ) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
                [firstname , lastname , id_card , email, hash 
                    , address , sub_district , district , province , postal_code 
                    , tel],
                (err, results) => {
                    if (err) {
                        console.log("Error while inserting a user into the database", err);
                        return res.status(400).send();
                    }
                    return res.status(201).json({ message: "New user successfully created!"});
                }
            )
        } catch(err) {
            console.log(err);
            return res.status(500).send();
        }
    })
})

// GET DATA
app.get("/get", async (req, res) => {
    try {
        connection.query("SELECT * FROM users", (err, results) => {
            if (err) {
                console.log(err);
                return res.status(400).send();
            }
            res.status(200).json(results)
        })
    } catch(err) {
        console.log(err);
        return res.status(500).send();
    }
})

// UPDATE DATA
app.put('/update', (req, res) => {
    const { id, firstname, lastname, id_card, address, sub_district, district, province, postal_code, tel } = req.body;
    connection.query("UPDATE users SET firstname = ?, lastname = ?, id_card = ?, address = ?, sub_district = ?, district = ?, province = ?, postal_code = ?, tel = ? WHERE id = ?", [id, firstname, lastname, id_card, address, sub_district, district, province, postal_code, tel], (err, result) => {
        if(err) {
            console.log(err);
        } else {
            res.send(result);
        }
    });
})

app.listen(1000, () => console.log('Server is running on port 1000'));