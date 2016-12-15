const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const tempSchema = new Schema({
  temp: {
    type: Number,
    required: true
  },
  timestamp: {
    type: String,
    required: true
  },
  reporter: {
    type:String,
    required: true
  }
});

tempSchema.methods.getF = () => {
  return this.temp * (9/5) + 32;
};

module.exports = mongoose.model('Temp', tempSchema);
