const express = require('express');
const users = express.Router();
const cors = require('cors');
const mysql = require('mysql');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
require('dotenv').config();

const User = require('../models/User');
users.use(cors());

const secret = process.env.SECRET;

const pool = mysql.createPool({
    connectionLimit: 10,
    host: process.env.DBHOST,
    user: process.env.DBUSER,
    password: process.env.DBPASSWORD,
    database: process.env.DB
})

function getConnection() {
    return pool;
}

users.post('/login', (req,res) => {
    User.findOne({
        where: {
            authId: req.body.authId
        }
    })
    .then(user => {
        if (user) {
            //user exists, give them a token
            let token = jwt.sign(user.dataValues, secret, {
                expiresIn: 1440
            });
            res.send(token);
        } else {
            //register user
            const today = new Date();
            const userData = {
                authId: req.body.authId,
                email: req.body.email,
                name: req.body.name,
                hasStarted: 0,
                created: today,
            }
            User.create(userData)
            .then(user => {
                let token = jwt.sign(user.dataValues, secret, {
                    expiresIn: 1440
                });
                res.send(token);
            })
            .catch(err => {
                res.send('error: ' + err);
            })
        }
    })
})

users.post('/hasStarted', (req,res) => {
    const authId = req.body.authId;
    const connection = getConnection();
    const queryString = 'SELECT hasStarted FROM users where authId = ?';

    connection.query(queryString, [authId], (err, rows, fields) => {
        if (!!err) {
            console.log('failed to query for users: ' + err);
            res.sendStatus(500);
            return
        }
        res.json(rows);
    });
})

users.post('/setUp', (req,res) => {
    const authId = req.body.authId;
    const connection = getConnection();
    const queryString = 'UPDATE users SET hasStarted = 1 WHERE authId = ?';

    connection.query(queryString, [authId], (err, rows, fields) => {
        if (!!err) {
            console.log('failed to query for users: ' + err);
            res.sendStatus(500);
            return
        }
        console.log('Got started!');
        res.json(rows);
    });

    // now create a user column for each workout database
    // Pushup
    // Max effort
    // Pyramid
    // Grip switch
    // Max Day
    // add a isDayFive bool column for each workout, default to false

})

module.exports = users;
