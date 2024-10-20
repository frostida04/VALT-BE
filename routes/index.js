const express = require("express");
const router = express.Router();
const Events = require("../model/Events");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const Addevent = require("../Controllers/addevent");

router.post("/addevent", function (req, res) {
  Addevent;
});

module.exports = router;
