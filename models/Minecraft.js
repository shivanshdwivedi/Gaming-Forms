const mongoose = require("mongoose");
const MinecraftSchema = new mongoose.Schema({
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
  username: {
    type: String,
    required: true,
  },
  discordname: {
    type: String,
  },
  launcher: {
    type: String,
  },
  otherlauncher: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Minecraft = mongoose.model("minecraft", MinecraftSchema);
