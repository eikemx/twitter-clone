require("dotenv").config();
require("./database/client");
const express = require("express");
const app = express();
const cors = require("cors");
const userRouter = require("./routes/userRouter");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/users", userRouter);

// app.get("/", (req, res) => {
//     res.send(console.log("Yippi"));
// })

const PORT = process.env.PORT || 3030;

app.listen(PORT, console.log(`You Twitter now on Port ${PORT}!`));
