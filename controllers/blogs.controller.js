const Blogs = require("../models/blogs.model");


const createNewBlog = async (req,res)=>{
    const {title} = req.body;
    const newBlogDoc = new Blogs({title});
    const result = await newBlogDoc.save();
    res.json(result)

}
const getAllBlogs= async(req,res)=>{
    try {
        const blogs = await Blogs.find({});
        res.json(blogs)
    } catch (error) {
        res.status(404).json({message:"Could not fetch blogs from db",error})
    }
}

const deleteBlogWithId = async (req,res)=>{
    try {
        const {id}= req.params;
        const result = await Blogs.findOneAndDelete({_id:id})
        res.json(result)
    } catch  {
        res.status(500).json({message:"Couldn't delete blog post. Please try again"})
    }
}

const updateBlogsWithId = async (req, res) => {
  try {
    const { id } = req.params;
    const filter = { _id: id }; //conditions to find the document
    const update = req.body; //updates to be perfomed

    //new: true -> returns the updated document
    const result = await Blogs.findOneAndUpdate(filter, update, { new: true });
    res.json(result);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Couldn't save blog post. Please try again", error });
  }
};


module.exports = {createNewBlog,getAllBlogs,deleteBlogWithId,updateBlogsWithId}