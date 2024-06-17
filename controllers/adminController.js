const asyncHnadler = require("express-async-handler")
const Holiday = require("../models/Holiday")
const upload = require("../utils/upload")

exports.adminGetAllHolidays = asyncHnadler(async (req, res) => {
    const result = await Holiday.find()
    res.json({ message: "admin holiday fetch success", result })
})
exports.adminAddHoliday = asyncHnadler(async (req, res) => {
    upload(req, res, async err => {
        if (err) {
            console.log(err)
            return res.status(400).json({ message: err.message || "upload error" })
        }
        const hero = []
        if (req.files) {
            for (const item of req.files) {
                hero.push(item.filename)
            }
        }
        await Holiday.create({ ...req.body, hero })
        res.json({ message: "admin holiday add success" })
    })
})
exports.adminUpdateHoliday = asyncHnadler(async (req, res) => {
    res.json({ message: "admin holiday update success" })
})
exports.adminDeleteHoliday = asyncHnadler(async (req, res) => {
    res.json({ message: "admin holiday delete success" })
})