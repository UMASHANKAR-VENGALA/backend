const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  name: {
        type: String,
        required: true,
      },
  singer: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
  imagefile: {
    type: String, //URL
    required: true,
  },
  audiofile: {
    type: String, //URL
    required: true,
  },
});

const song = mongoose.model('Song', eventSchema);

module.exports = song;