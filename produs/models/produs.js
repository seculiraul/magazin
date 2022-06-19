const pool = require('../../databasepg');
const query = require('../../queries');
const Sequelize = require('sequelize');

const sequelize = require('../../databasepg')


const Produs = sequelize.define('produs', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nume: {
        type: Sequelize.STRING,
        allowNull: false
    },
    pret: {
        type: Sequelize.FLOAT,
        allowNull: false
    },
    descriere: Sequelize.STRING,
    categorie: Sequelize.STRING,
    isNew: Sequelize.BOOLEAN
});

module.exports = Produs;