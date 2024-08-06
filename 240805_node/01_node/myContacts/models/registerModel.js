const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique: true,
    },
    pw: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const Register = mongoose.model("Register", registerSchema);

module.exports = Register;
