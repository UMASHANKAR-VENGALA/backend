const usercontroller = require("../controllers/usercontroller")

const express = require("express")
const userrouter = express.Router()

// admin routes

userrouter.post("/checkuserlogin",usercontroller.checkuserlogin)
userrouter.post("/insertuser",usercontroller.insertuser)
userrouter.post("/contact",usercontroller.contactus)

module.exports = userrouter