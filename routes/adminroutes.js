const admincontroller = require("../controllers/admincontroller")

const express = require("express")
const adminrouter = express.Router()

// admin routes

adminrouter.post("/checkadminlogin",admincontroller.checkadminlogin)
adminrouter.get("/viewusers",admincontroller.viewusers)
adminrouter.get("/viewuserprofile/:email",admincontroller.viewuserprofile)

adminrouter.delete("/deleteuser/:email",admincontroller.deleteuser)

adminrouter.post("/createalbum",admincontroller.createalbum)
adminrouter.get("/viewalbums",admincontroller.viewalbums)
adminrouter.get("/viewalbumimg/:moviename",admincontroller.viewalbumimg)
adminrouter.get("/albumimage/:filename",admincontroller.albumimage)


adminrouter.post("/addsong",admincontroller.addsong)
adminrouter.get("/viewsongs/:moviename",admincontroller.viewsongs)
adminrouter.get("/songaudio/:filename",admincontroller.songaudio)

adminrouter.get("/playsong/:songname",admincontroller.playsong)

module.exports = adminrouter