const mongoose = require("mongoose");

const OrganizerSchema = new mongoose.Schema({
  ornagizer: {
    required: true,
    type: String,
  },
  Name: {
    required: true,
    type: String
  },
  Surname: {
    type: String,
  },
  country: {
    required : true,
    type: String,
  },
  city: {
    required: true,
    type: String,
  },
  telegram: {
    type: String,
  },
  phone: {
    type: Number,
  },
  email: {
    required : true,
    type: String,
  },
  wallet: {
    required : true,
    type: String,
  },
  ornagizerId: {
    required : true,
    type: String
  }
});

module.exports = mongoose.model("Organizer", OrganizerSchema);
