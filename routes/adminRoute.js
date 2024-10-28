const express = require("express")
const adminRoute = express.Router()

adminRoute.get("/admin", (req, res) => {
    res.send("admin")
})

module.exports = adminRoute