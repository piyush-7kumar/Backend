const mongoose = require('mongoose');

const DB_URI = "mongodb://127.0.0.1:27017/website";


const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI);
    console.log("Connected to DB at", DB_URI);
  } catch (e) {
    console.log("failed to connect to DB", e);
  }
};

module.exports = connectDB;



