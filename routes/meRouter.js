const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.send ({
    _id: "010010000110010101101100",
    twitter_name: "LordComandante",
    first_name: "Jon",
    last_name: "Snow",
    email: "wardenofthenorth@gmail.com",
    phone: "0049 123 9876543",
    followers: "99999",
    image: "9.jpg",
    timestamps: "2022-07-16T07:48:57.856Z"
    })
});

module.exports = router;