const express = require("express");
const router = express.Router();
const Minecraft=require('../models/Minecraft')


router.get("/", (req, res) => {
  res.render("MINECRAFT");
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
      res.status(400).json({ errors: [{ msg: "Email already exists" }] });
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

    minecraftuser.save().then(()=>{
      res.redirect('https://bvpcsi.com/glitch.html')
    }).catch((err)=>{
      res.status(500).send('Server error')
    });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
