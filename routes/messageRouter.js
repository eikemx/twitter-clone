const express = require("express");
const router = express.Router();

const {
    list_messages,
    find_message,
    create_messages,
} = require("../controllers/messageController");

router  
    .route("/")
    .get(list_messages)
    .post(create_messages);

router
    .route("/:id")
    .get(find_message);

module.exports = router;