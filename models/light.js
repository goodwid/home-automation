const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lightSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  apiKey: {
    type: String,
    required: true
  },
  location: {
    type:String
  }
});


module.exports = mongoose.model ('Light', lightSchema);
