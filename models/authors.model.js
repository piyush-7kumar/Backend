

const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema({
  fullName: { type: String, maxlength: 25 },
  twitterHandle: { type: String },
  email: { type: String, required: true, maxlength: 50 },
  image: { type: String },
},
{_id: false}

);


module.exports = authorSchema;