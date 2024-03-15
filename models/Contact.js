const mongoose = require("mongoose")

const contactschema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    suggestions:{
        type:String,
        required:true
    }
});

const contact = mongoose.model('contact',contactschema)

module.exports = contact