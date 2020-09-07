const express = require("express");
const router = express.Router();
const Cod = require("../models/Cod");

router.get("/", (req, res) => {
  res.render("COD");
});

router.post("/", async (req, res) => {
  const { name, email, college, mobileno, codUsername, discordname } = req.body;

  try {
    let coduser = await Cod.findOne({ email });
    if (coduser) {
      return res
        .status(400)
        .json({ errors: [{ msg: "Email already exists" }] });
    }
    coduser = new Cod({
      name,
      email,
      college,
      mobileno,
      codUsername,
      discordname,
    });

    coduser
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
