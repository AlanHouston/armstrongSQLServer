const express = require('express');
const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
require('dotenv').config();

const User = require('../models/User');
users.use(cors());

const secret = process.env.SECRET;

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
                created: today,
            }
            User.create(userData)
            .then(user => {
                res.json({status: 'Registered'});
            })
            .catch(err => {
                res.send('error: ' + err);
            })
        }
    })
})

module.exports = users;
