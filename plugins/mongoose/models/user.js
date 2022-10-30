const { isEmail } = require("validator");

const mongoose = require("mongoose");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      minLength: 3,
      maxLength: 38,
      unique: true,
    },
    email: {
      type: String,
      require: true,
      validate: [isEmail],
      lowercase: true,
      unique: true,
    },
    password: {
      type: String,
      require: true,
      select: false,
    }, //String Hasher
    prologue: {
      type: Boolean,
      default: false,
    },
    prologueEtape: {
      type: Number,
      default: 1,
    },
    language: {
      type: String,
      default: "fr",
    },
    theme: {
      type: String,
      default: "dark",
    },
    gladiator: [
      {
        type: mongoose.ObjectId,
        ref: "gladiator",
      },
    ],
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
