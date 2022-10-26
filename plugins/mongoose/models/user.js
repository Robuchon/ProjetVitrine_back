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
  },
  {
    timestamps: true,
  }
);

const UserModel = mongoose.model("user", userSchema);

module.exports = UserModel;
