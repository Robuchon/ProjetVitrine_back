const express = require("express");
const TokenHelpers = require("../../middlewareAndControler/auth/tokenHelpers");
const UserSettings = require("../../middlewareAndControler/user/userSettings");
const userSettingsRouter = express.Router();

userSettingsRouter.post("/switchTheme", 
TokenHelpers.verifyTokenId,
UserSettings.switchTheme);

module.exports = userSettingsRouter;
