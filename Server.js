const express = require("express")
const mongoose = require("mongoose")
const cors = require("cors")

const dburl = "mongodb://localhost:27017/sdpproject32"
mongoose.connect(dburl).then(() => {
    console.log("db connected successfully")
}).catch((err) => {
    console.log(err.message)
});
  


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