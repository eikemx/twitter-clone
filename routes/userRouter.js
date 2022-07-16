const express = require("express");
const router = express.Router();

const {
    list_users,
    create_users,
} = require("../controllers/userController");

// router.get("/", list_user);
router.get("/", list_users)
router.post("/", create_users);

module.exports = router;