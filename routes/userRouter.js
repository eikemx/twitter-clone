const express = require("express");
const router = express.Router();

const {
    list_users,
    find_user,
    create_users,
} = require("../controllers/userController");

router  
    .route("/")
    .get(list_users)
    .post(create_users);

router
    .route("/:id")
    .get(find_user);

module.exports = router;