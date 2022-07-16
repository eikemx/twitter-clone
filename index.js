require("dotenv").config();
require("./database/client");
const express = require("express");
const app = express();
const userRouter = require('./routes/userRouter');
const meRouter = require("./routes/meRouter");
const messageRouter = require("./routes/messageRouter");
const cors = require("cors");

app.use(cors());
app.use(express.static("public"));
app.use(express.json());
app.use("/users", userRouter);
app.use("/me", meRouter);
app.use("/messages", messageRouter);

const PORT = process.env.PORT || 3030;

app.listen(PORT, console.log(`You Twitter now on Port ${PORT}!`));
