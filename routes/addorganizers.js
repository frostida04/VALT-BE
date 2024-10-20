const express = require("express");
const router = express.Router();
const Events = require("../model/Events");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const Organizer = require("../model/Organizer");

router.post("/addorganizer", async (req, res) => {
  console.log("=========Organizers==========", req.body);
  const ornagizer = req.body.ornagizer;
  const Name = req.body.Name;
  const Surname = req.body.Surname;
  const country = req.body.country;
  const city = req.body.city;
  const telegram = req.body.telegram;
  const phone = req.body.phone;
  const email = req.body.email;
  const wallet = req.body.wallet;
  const organizerId = req.body.organizerId;

  try {
    const newOrganizer = new Organizer({
      ornagizer: ornagizer,
      Name: Name,
      Surname: Surname,
      country: country,
      city: city,
      telegram: telegram,
      phone: phone,
      email: email,
      wallet: wallet,
      organizerId: organizerId,
    });
    await newOrganizer.save();
    return res.status(201).json({ message: "Organizers added successfully" });
  } 
  catch (error) {
    console.error(error);
    return res
      .status(500)
      .json({ message: "Server error during addition" });
  }
});

module.exports = router;
