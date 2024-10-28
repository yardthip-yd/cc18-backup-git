const express = require("express")
const authRoute = express.Router()

authRoute("/register", ()=>{})
authRoute("/login", () => {})

module.exports = authRoute