const Sequelize = require('sequelize');
const db = require('../database/db');

//NOPE

module.exports = db.sequelize.define(
    'pushup',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: false
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
