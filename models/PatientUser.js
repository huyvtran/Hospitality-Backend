const mongoose = require("mongoose");

const patientUserSchema = mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  phoneNumber: {
    type: Number,
  },
  address: {
    type: String,
  },
  latitude: {
    type: Number,
    required: true,
  },
  longitude: {
    type: Number,
    required: true,
  },
  enable: {
    type: Boolean,
    default: false,
  },
  appointments: [
    {
      email: {
        type: String,
        required: true,
      },
      status: {
        type: String,
        default: "Pending",
      },
      date: {
        type: Date,
        default: Date.now,
      },
      note: {
        type: String,
      },
    },
  ],
});

module.exports = PatientUser = mongoose.model("PatientUser", patientUserSchema);
