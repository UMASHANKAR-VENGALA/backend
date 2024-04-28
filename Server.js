const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")
require('dotenv').config();

// const dburl = "mongodb://localhost:27017/sdpproject32"

const dburl = process.env.mongodburl


mongoose.connect(dburl).then(() => {
    console.log("db connected successfully")
}).catch((err) => {
    console.log(err.message)
});
  

// MongoDB Atlas Connection
// const dburl = "mongodb+srv://klu:klu@cluster0.3q0v9x3.mongodb.net/demoproject32?retryWrites=true&w=majority"
// mongoose.connect(dburl).then(() => {
//     console.log("Connected to MongoDB Atlas Successfully")
// }).catch((err) => {
//     console.log(err.message)
// });


const app = express()
app.use(express.json()) // to parse in json data
app.use(cors())


const userrouter = require("./routes/userroutes")
const adminrouter = require("./routes/adminroutes")
app.use("",adminrouter) // it includes admin routes
app.use("",userrouter)

const port = 2032

app.listen(port,()=>{
    console.log(`server runnig at port ${port}`)
})