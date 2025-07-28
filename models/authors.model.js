

const mongoose = require('mongoose');


const authorSchema = new mongoose.Schema( {
    fullName: { type: String, maxlength: 25 },
    twitterHandle: { type: String },
    email: {
      type: String,
      required: true,
      maxlength: 50,
      validate: (value) => validator.isEmail(value), //returns boolean value
    },
    image: { type: String },
},
{ _id: false }
);


module.exports = authorSchema;