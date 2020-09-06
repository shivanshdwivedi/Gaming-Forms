const express = require("express");
const router = express.Router();
const Chess = require("../models/Chess");

router.get("/", (req, res) => {
  res.render("formss");
});

router.post("/", async (req, res) => {
  const {
    name,
    email,
    college,
    mobileno,
    discordname,
    chessbaseAccount,
    chessbaseID,
  } = req.body;

  try {
    let chessuser = await Chess.findOne({ email });
    if (chessuser) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Email already exists" }] });
    }
    chessuser = new Chess({
      name,
      email,
      college,
      mobileno,
      discordname,
      chessbaseAccount,
      chessbaseID,
    });

    chessuser
      .save()
      .then(() => {
        res.redirect("https://bvpcsi.com/glitch.html");
      })
      .catch((err) => {
        res.status(500).send("Server error");
      });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
