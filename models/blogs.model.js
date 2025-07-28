const mongoose = require('mongoose');

const authorSchema = require('./authors.model')

const blogSchema = new mongoose.Schema({
    title: { type:String, required:true, unique:true },
    authors: [authorSchema],
    content: { type:String, default: ""},
    publishedAt: { type: Date, default: null },
},{ timestamps: true });

const blogModel = mongoose.model("Blogs",blogSchema,'websiteBlogs');

module.exports = blogModel;