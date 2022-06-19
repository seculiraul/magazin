const Sequelize = require('sequelize');

const sequelize = require('../../databasepg');

const User = sequelize.define('user', {
    id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false
    },
    nume: Sequelize.STRING
});

module.exports = User;