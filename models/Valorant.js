const mongoose = require("mongoose");
const ValorantSchema = new mongoose.Schema({
  teamleadername: {
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
  member1id: {
    type: String,
    required: true,
  },
  member2id: {
    type: String,
  },
  member3id: {
    type: String,
  },
  member4id: {
    type: String,
  },
  member5id: {
    type: String,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Valorant = mongoose.model("valorant", ValorantSchema);
