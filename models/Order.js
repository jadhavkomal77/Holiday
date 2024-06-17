const mongoose = require("mongoose")

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Types.ObjectId, ref: "user", required: true },
    holidayId: { type: mongoose.Types.ObjectId, ref: "holiday", required: true },
}, { timestamps: true })
module.exports = mongoose.model("order", orderSchema)