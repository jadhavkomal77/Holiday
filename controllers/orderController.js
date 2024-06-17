const asyncHnadler = require("express-async-handler")
const Order = require("../models/Order")

exports.placeOrder = asyncHnadler(async (req, res) => {
    await Order.create(req.body)
    res.json({ message: "Order Place success" })
})
exports.userOrderHistory = asyncHnadler(async (req, res) => {
    const result = await Order.find({ userId: req.body.userId }).populate("holidayId")
    res.json({ message: "History Fetch success", result })
})
