const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'user',
    {
        id: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        authId: {
            type: Sequelize.STRING
        },
        email: {
            type: Sequelize.STRING
        },
        name: {
            type: Sequelize.STRING
        }
    },
    {
        timestamps: false
    }
)
