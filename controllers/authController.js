const asyncHandler = require("express-async-handler")
const { OAuth2Client } = require("google-auth-library")
const jwt = require("jsonwebtoken")
const User = require("../models/User")
exports.continueWithGoogle = asyncHandler(async (req, res) => {
    const { credential } = req.body
    const client = new OAuth2Client({ clientId: process.env.GOOGLE_CLIENT_ID })
    const { payload } = await client.verifyIdToken({ idToken: credential })

    const result = await User.findOne({ email: payload.email })
    if (result) {
        // login
        const token = jwt.sign({ userId: result._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        res.cookie("travler", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
        res.json({ message: "Login Success", result })
    } else {
        // register
        const x = await User.create({
            name: payload.name,
            email: payload.email,
            photo: payload.picture
        })
        const token = jwt.sign({ userId: x._id }, process.env.JWT_KEY, { expiresIn: "1d" })
        res.cookie("travler", token, { httpOnly: true, maxAge: 1000 * 60 * 60 * 24 })
        res.json({ message: "Register Success", result: x })
    }
})