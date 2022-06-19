const {Sequelize} = require('sequelize')
const config = require('./config.json');

const sequelize = new Sequelize('ecommer', 'postgres', 'admin', {
    host: 'localhost',
    dialect: 'postgres',
});

module.exports = sequelize;