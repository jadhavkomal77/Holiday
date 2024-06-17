const mongoose = require("mongoose")

const holidaySchema = new mongoose.Schema({
    name: { type: String, required: true },
    duration: { type: String, required: true },
    type: { type: String, required: true },
    groupSize: { type: String, required: true },
    price: { type: Number, required: true },
    hero: { type: [String], required: true },
    overview: { type: String, required: true },
    highlights: { type: String, required: true },
    includes: { type: String, required: true },
    excludes: { type: String, required: true },
    itenary: { type: String, required: true },
    faq: { type: String, required: true },
}, { timestamps: true })


module.exports = mongoose.model("holiday", holidaySchema)