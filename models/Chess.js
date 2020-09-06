const mongoose = require("mongoose");
const ChessSchema = new mongoose.Schema({
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
  discordname: {
    type: String,
  },
  chessbaseAccount: {
    type: String,
  },
  chessbaseID: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Chess = mongoose.model("chess", ChessSchema);
