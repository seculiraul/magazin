const express = require('express');
const orderCtl = require('../controller/order');

const orderRouter = express.Router();


orderRouter.get('/all', orderCtl.getAllOrders);

orderRouter.get('/:id', orderCtl.getUserOrders);

orderRouter.post('/', orderCtl.addOrder);


module.exports = orderRouter;