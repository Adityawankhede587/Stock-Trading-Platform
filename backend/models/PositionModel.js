const { PositionsSchema } = require("../schemas/PositionsSchema");

const {model } = require("mongoose");

const PositionModel = new model("position", PositionsSchema);

module.exports = {PositionModel};