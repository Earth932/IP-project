const express = require('express')
const mysql = require('mysql')
const cors = require('cors')
const app = express();

app.use(cors());
app.use(express.json());

// MySQL connection
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'ip_project',
    port: '3306'
})

connection.connect((err) => {
    if (err) {
        console.log('Error connecting to MySQL database = ', err)
        return;
    }
    console.log('MySQL successfully connected!');
})

// CREATE Routes
app.post("/create", async (req, res) => {
    const { firstname , lastname , id_card , email, password 
        , address , sub_district , district , province , postal_code 
        , tel , fax} = req.body;

    try {
        connection.query(
            "INSERT INTO users(firstname , lastname , id_card , email, password , address , sub_district , district , province , postal_code , tel , fax) VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
            [firstname , lastname , id_card , email, password 
                , address , sub_district , district , province , postal_code 
                , tel , fax],
            (err, results, fields) => {
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

// READ
app.get("/read", async (req, res) => {
    try {
        connection.query("SELECT * FROM users", (err, results, fields) => {
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

// READ single users from db
app.get("/read/single/:email", async (req, res) => {
    const email = req.params.email;

    try {
        connection.query("SELECT * FROM users WHERE email = ?", [email], (err, results, fields) => {
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

// Update
app.put('/update', (req, res) => {
    const { id, firstname, lastname, id_card, address, sub_district, district, province, postal_code, tel, fax } = req.body;
    connection.query("UPDATE users SET firstname = ?, lastname = ?, id_card = ?, address = ?, sub_district = ?, district = ?, province = ?, postal_code = ?, tel = ?, fax = ? WHERE id = ?", [id, firstname, lastname, id_card, address, sub_district, district, province, postal_code, tel, fax], (err, result) => {
        if(err)
    });
})

// UPDATE data
//app.patch("/update/:email", async (req, res) => {
//    const email = req.params.email;
//   const newPassword = req.body.newPassword;

//    try {
//        connection.query("UPDATE users SET password = ? WHERE email = ?", [newPassword, email], (err, results, fields) => {
//            if (err) {
//                console.log(err);
//                return res.status(400).send();
//            }
//            res.status(200).json({ message: "User password updated successfully!"});
//        })
//    } catch(err) {
//        console.log(err);
//        return res.status(500).send();
//    }
//})

// // DELETE
// app.delete("/delete/:email", async (req, res) => {
//     const email = req.params.email;

//     try {
//         connection.query("DELETE FROM users WHERE email = ?", [email], (err, results, fields) => {
//             if (err) {
//                 console.log(err);
//                 return res.status(400).send();
//             }
//             if (results.affectedRows === 0) {
//                 return res.status(404).json({ message: "No user with that email!"});
//             }
//             return res.status(200).json({ message: "User deleted successfully!"});
//         })
//     } catch(err) {
//         console.log(err);
//         return res.status(500).send();
//     }
// })

app.listen(4000, () => console.log('Server is running on port 4000'));