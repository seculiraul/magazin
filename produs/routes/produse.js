const express = require('express');
const produseCtl = require('../controller/produse');

const produseRouter = express.Router();


produseRouter.get('/all', produseCtl.getAllProducts);

produseRouter.get('/:id', produseCtl.getProdusById);

produseRouter.put('/:id', produseCtl.editPorduct);

produseRouter.post('/', produseCtl.addPorduse);

produseRouter.delete('/:id', produseCtl.deleteProdus);

module.exports = produseRouter;