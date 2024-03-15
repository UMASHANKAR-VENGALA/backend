const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

// admin routes

adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.get("/viewusers",admincontroller.viewusers)
adminrouter.delete("/deleteuser/:email",admincontroller.deleteuser)


module.exports = adminrouter