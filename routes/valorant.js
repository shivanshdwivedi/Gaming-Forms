const express = require("express");
const router = express.Router();
const Valorant = require("../models/Valorant");
const { request } = require("express");

router.get("/", (req, res) => {
  res.render("valorant", {
    error: req.flash("error"),
    success: req.flash("success"),
  });
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
      req.flash("error", "Email already registered");
      // return res.status(400).json({ errors: [{ msg: "Email already exists" }] });
      return res.redirect("/valorant");
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

    valorantuser
      .save()
      .then(() => {
        req.flash("success", "Thank you for registering!");
        res.redirect("/valorant");
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
