const { continueWithGoogle } = require("../controllers/authController")

const router = require("express").Router()

router.post("/continue-with-google", continueWithGoogle)

module.exports = router