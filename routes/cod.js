const express = require("express");
const router = express.Router();
const Cod = require("../models/Cod");

router.get("/", (req, res) => {
  res.render("COD",{
    error: req.flash("error"),
    success: req.flash("success"),
  });
});

router.post("/", async (req, res) => {
  const { name, email, college, mobileno, codUsername, discordname ,filename } = req.body;

  try {
    let coduser = await Cod.findOne({ email });
    if (coduser) {
      req.flash("error", "Email already registered");
      // return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
      return res.redirect("/cod");
    }
    coduser = new Cod({
      name,
      email,
      college,
      mobileno,
      codUsername,
      discordname,
      filename,
    });

    coduser
      .save()
      .then(() => {
        req.flash("success", "Thank you for registering!");
        res.redirect("/cod");
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
