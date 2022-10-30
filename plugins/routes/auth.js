const express = require("express");
const authRouter = express.Router();

//import middleware and controler
const Auth = require("../../middlewareAndControler/auth/auth");
const AuthPassword = require("../../middlewareAndControler/auth/authPasword");
const AuthValidator = require("../../middlewareAndControler/auth/authValidator");
const TokenHelpers = require("../../middlewareAndControler/auth/tokenHelpers");

authRouter.post("/login", AuthValidator.login, Auth.login);

authRouter.get(
  "/loginWithToken",
  TokenHelpers.verifyTokenId,
  Auth.loginWithToken
);

authRouter.post("/reset", (req, res) => {
  res.send({ success: true, message: "reset" });
});

authRouter.post(
  "/signin",
  AuthValidator.signup,
  AuthPassword.hashPassword,
  Auth.createAccount,
  Auth.login
);

module.exports = authRouter;
