const router = require("express").Router();
const {getAllUsers,getUserByUuid,SearchUserByQuery} = require("../controllers/users.controller")

const verifyAuth = require("../middlewares/verifyAuth");
const userSearchValidator = require("../middlewares/userSearchValidator");

router.get("/",getAllUsers);
router.get("/search",
    verifyAuth,
    userSearchValidator,
    SearchUserByQuery
);
    
router.get("/:uuid",getUserByUuid);

module.exports = router