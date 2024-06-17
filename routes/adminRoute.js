const { adminGetAllHolidays, adminAddHoliday, adminUpdateHoliday, adminDeleteHoliday } = require("../controllers/adminController")

const router = require("express").Router()

router
    .get("/holidays", adminGetAllHolidays)
    .post("/add-holiday", adminAddHoliday)
    .put("/update-holiday/:id", adminUpdateHoliday)
    .delete("/delete-holiday/:id", adminDeleteHoliday)

module.exports = router