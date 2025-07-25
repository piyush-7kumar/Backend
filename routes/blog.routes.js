const router = require("express").Router();
const {createNewBlog,getAllBlogs,deleteBlogWithId,updateBlogsWithId} = require("../controllers/blogs.controller");

router.get("/",getAllBlogs);
router.post("/new",createNewBlog);
router.delete("/:id",deleteBlogWithId);
router.patch("/:id",updateBlogsWithId);

module.exports = router;