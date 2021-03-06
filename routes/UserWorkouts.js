const express = require('express');
const users = express.Router();
const cors = require('cors');
const mysql = require('mysql');
// const jwt = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
const dotenv = require('dotenv');
require('dotenv').config();

const UserWorkout = require('../models/userWorkouts');
userWorkouts.use(cors());

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

userWorkouts.post('/userWorkout', (req,res) => {

}



module.exports = workouts;
