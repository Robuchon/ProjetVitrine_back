const bcrypt = require("bcrypt");
const saltRounds = 10;

const AuthPassword = {
  hashPassword(req, res, next) {
    req.body.passwordNoHash = req.body.password;
    req.body.password = bcrypt.hashSync(req.body.password, saltRounds);
    next();
  },
};

module.exports = AuthPassword;