const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const messageSchema = new Schema(
  {
    author: { type: Schema.Types.ObjectId, ref: "User" },
    text: { type: String, min: 10, max: 280 },
  },
  { timestamps: true }
);

const Message = mongoose.model("Message", messageSchema);

module.exports = Message;
