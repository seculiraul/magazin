const { application } = require('express');
const express = require('express');
const produseRouter = require('./produs/routes/produse');
const orderRouter = require('./order/routes/order');

const sequelize = require('./databasepg');
const Produs = require('./produs/models/produs');
const User = require('./user/model/user');
const Comanda = require('./order/model/order');
const ElementComanda = require('./order/model/elementComanda');

const app = express();

//Produs.belongsTo(User, {constraints: true, onDelete: 'CASCADE'});
User.hasMany(Comanda, {constraints: true, onDelete: 'CASCADE'});
//Comanda.hasOne(User);
//Comanda.hasMany(ElementComanda);
Comanda.belongsToMany(Produs, {through: ElementComanda})


app.use(express.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT , DELETE');
    res.setHeader('Access-Controll-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.use('/produse', produseRouter);
app.use('/orders', orderRouter);

sequelize
    .sync()
    .then(() => {
        app.listen(3000);
    })
    .catch(err => {
        console.log(err);
    });