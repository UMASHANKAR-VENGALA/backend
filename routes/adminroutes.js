const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

// admin routes

adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.get("/viewusers",admincontroller.viewusers)
adminrouter.get("/viewuserprofile/:email",admincontroller.viewuserprofile)

adminrouter.delete("/deleteuser/:email",admincontroller.deleteuser)

adminrouter.post("/createsong",admincontroller.createsong)

module.exports = adminrouter