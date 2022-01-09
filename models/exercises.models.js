const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const User = new Schema({
  firstname: {
    type: String,
    default: ''
},
lastname: {
    type: String,
    default: ''
},
Email:{
  type:String,
  default:''
},

})



const Exercise = mongoose.model('Exercise', User);

module.exports = Exercise;