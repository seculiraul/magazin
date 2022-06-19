const Sequelize = require('sequelize');
const sequelize = require('../../databasepg');

const Comanda = sequelize.define('comenzi', {
    id: {
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
        type: Sequelize.INTEGER
    },
    total: Sequelize.FLOAT,
    transport: Sequelize.FLOAT  
});

module.exports = Comanda