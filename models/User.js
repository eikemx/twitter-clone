const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    twitter_name: { type: String, min: 2, max: 50, required: true },
    first_name: { type: String, min: 2, max: 50 },
    last_name: { type: String, min: 2, max: 50 },
    email: { type: String },
    phone: { type: String },
    followers: { type: Number },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = User;
