const Sequelize = require('sequelize');
const db = require('../database/db');

module.exports = db.sequelize.define(
    'userWorkout',
    {
        workoutId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        userId: {
            type: Sequelize.INTEGER
        },
        workout: {
            type: Sequelize.STRING
        },
        date: {
            type: Sequelize.DATEONLY
        },
        isDayFive: {
            type: Sequelize.BOOLEAN
        }
    },
    {
        timestamps: false
    }
)
