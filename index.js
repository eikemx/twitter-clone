require("dotenv").config();
require("./database/client");
const express = require ("express");
const app = express();
const userRouter = require('./routes/userRouter');
const meRouter = require("./routes/meRouter");

app.use(express.json());
app.use("/users", userRouter);
app.use("/me", meRouter);
// app.get("/", (req, res) => {
//     res.send(console.log("Yippi"));
// })

const PORT = process.env.PORT || 3030;

app.listen(PORT, console.log(`You Twitter now on Port ${PORT}!`))