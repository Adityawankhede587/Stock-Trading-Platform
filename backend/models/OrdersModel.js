const {model} = require ("mongoose");
const { OrderScehma } = require("../schemas/OrdersSchema");

const OrderModel = new model ("order", OrderScehma );

module.exports = { OrderModel};