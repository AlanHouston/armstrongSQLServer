const dotenv = require('dotenv');
require('dotenv').config();

const Sequelize = require('sequelize');
const db = {};
const sequelize = new Sequelize(process.env.DB, process.env.DBUSER, process.env.DBPASSWORD, {
    host: process.env.DBHOST,
    dialect: 'mysql',
    // operatorsAliases: false,

    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});
db.Sequelize = Sequelize;
db.sequelize = sequelize;

module.exports = db;
