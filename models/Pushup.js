const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'pushup',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: false
            //this will be the id from user
        },
        date: {
            type: Sequelize.STRING
        },
        set: {
            type: Sequelize.INTEGER
            //1-3
        },
        total: {
            type: Sequelize.INTEGER
        },
        isDayFive: {
            type: Sequelize.BOOLEAN
        }
    },
    {
        timestamps: false
    }
)
