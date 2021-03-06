const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  movieData: { type: String},
  movieArr: { type: Array},
  friendsArray: {type: Array},
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", userSchema);

module.exports = User;