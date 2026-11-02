const {Schema} = require ("mongoose");

const OrderScehma = new Schema({
    name:String,
    qty: Number,
    price:Number,
    mode:String,

});

module.exports ={OrderScehma};