const express = require("express");
const router = express.Router();
const Minecraft = require("../models/Minecraft");

router.get("/", (req, res) => {
  res.render("MINECRAFT", {
    error: req.flash("error"),
    success: req.flash("success"),
  });
});

router.post("/", async (req, res) => {
  const {
    name,
    email,
    college,
    mobileno,
    username,
    discordname,
    launcher,
    otherlauncher,
  } = req.body;
  try {
    let minecraftuser = await Minecraft.findOne({ email });
    if (minecraftuser) {
      req.flash("error", "Email already registered");
      // return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
      return res.redirect("/minecraft");
    }
    minecraftuser = new Minecraft({
      name,
      email,
      college,
      mobileno,
      username,
      discordname,
      launcher,
      otherlauncher,
    });

    minecraftuser
      .save()
      .then(() => {
        req.flash("success", "Thank you for registering!");
        res.redirect("/minecraft");
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
