const { getTours, getTourDetails } = require("../controllers/publicController")

const router = require("express").Router()

router
    .get("/tours", getTours)
    .get("/tours/:id", getTourDetails)

module.exports = router