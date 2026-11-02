
const { model } = require("mongoose");

const { HoldingSchema } = require("../schemas/HoldingSchemas");

const HoldingModel = model("holding", HoldingSchema);

module.exports = { HoldingModel };