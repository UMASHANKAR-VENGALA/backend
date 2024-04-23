const mongoose = require("mongoose")

const registration = new mongoose.Schema({
    fullname: {
      type: String,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true
    },
    password: {
      type: String,
      required: true
    },
    gender: {
      type: String,
      required:true,
      enum: ['male', 'female', 'others']
    },
    contact: {
      type: String,
      required: true,
      unique:true
    },
  });

const user = mongoose.model('user', registration);

module.exports = user;