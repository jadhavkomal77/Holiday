const { placeOrder, userOrderHistory } = require("../controllers/orderController")
const { protectedRoute } = require("../utils/protected")
const router = require("express").Router()
router
    .post("/place-order", protectedRoute, placeOrder)
    .get("/history", protectedRoute, userOrderHistory)

module.exports = router