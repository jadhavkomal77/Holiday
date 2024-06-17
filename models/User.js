const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    photo: { type: String },
    active: { type: Boolean, default: true },
    role: { type: String, default: "user", enum: ["user", "admin"] },
    password: { type: String },
}, { timestamps: true })


module.exports = mongoose.model("user", userSchema)