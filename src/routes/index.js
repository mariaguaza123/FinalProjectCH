const { Router } = require('express');
const productsRouter = require('./products');
const cartRouter = require('./cart');

const routerMain = Router();
routerMain.use('/products', productsRouter);
routerMain.use('/cart', cartRouter);

module.exports = routerMain;