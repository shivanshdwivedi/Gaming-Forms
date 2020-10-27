const mongoose = require("mongoose");
const CodSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  college: {
    type: String,
    required: true,
  },
  mobileno: {
    type: Number,
    required: true,
  },
  codUsername: {
    type: String,
    required: true,
  },
  discordname: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Cod = mongoose.model("cod", CodSchema);
