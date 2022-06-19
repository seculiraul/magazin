const Sequelize = require('sequelize');
const sequelize = require('../../databasepg');

const ElementComanda = sequelize.define('elementComanda', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true
    },
    cantitate: Sequelize.INTEGER
});

module.exports = ElementComanda;