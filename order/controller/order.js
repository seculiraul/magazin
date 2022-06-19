const Order = require('../model/order');
const User = require('../../user/model/user');
const ElementComanda = require('../model/elementComanda');


exports.getAllOrders = async (req, res, next) => {
   try {
    const orders = await Order.findAll();
    res.status(200).json(orders);
   } catch(err) {
    console.log(err);
   }
}

exports.getUserOrders = async (req, res, next) => {
    try {
        const orders = await Order.findAll({where: {userId: req.params.id}});
        res.status(200).json(orders);
    } catch(err) {
        console.log(err);
    }
}

exports.addOrder = async(req, res, next) => {
    try {
        const userId = req.body.userId;
        const total = req.body.order.total;
        const transport = req.body.order.transport;
        const items = req.body.items;

        const order = await Order.create({
            total: total,
            transport: transport,
            userId: userId
        });

        for(let item of items) {
            const elementComanda = await ElementComanda.create({
                produId: item.produsId,
                cantitate: item.cantitate,
                comenziId: order.id
            })
        }

        res.json({
            message: 'Success'
        })
    }catch(err) {
        console.log(err);
    }
}