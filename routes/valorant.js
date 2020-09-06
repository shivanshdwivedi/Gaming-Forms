const express = require("express");
const router = express.Router();
const Valorant = require("../models/Valorant");

router.get("/", (req, res) => {
  res.render("valorant");
});

router.post("/", async (req, res) => {
  const {
    teamleadername,
    email,
    college,
    mobileno,
    member1id,
    member2id,
    member3id,
    member4id,
  } = req.body;
  try {
    let valorantuser = await Valorant.findOne({ email });
    if (valorantuser) {
      return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
    }
    valorantuser = new Valorant({
      teamleadername,
      email,
      college,
      mobileno,
      member1id,
      member2id,
      member3id,
      member4id,
    });

    valorantuser.save().then(()=>{
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
