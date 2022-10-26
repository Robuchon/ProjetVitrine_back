const validator = require("validator");

const AuthValidator = {
  signup(req, res, next) {
    let errors = {};
    let { username, email, password } = req.body;
    if (!username || !email || !password) {
      errors["email"] = true;
    }
    if (!validator.default.isEmail(email)) {
      errors["email"] = true;
    }
    if (!validator.default.isAlphanumeric(username, ["fr-FR"])) {
      errors["username"] = true;
    }
    if (Object.keys(errors).length > 0) {
      return res.status(400).send({
        success: false,
        errors: errors,
      });
    } else {
      next();
    }
  },

  login(req, res, next) {
    let { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send({
        success: false,
        errors: {
          email: true,
          password: true,
        },
      });
    }
    if (!validator.default.isEmail(email)) {
      return res.status(400).send({
        success: false,
        errors: {
          email: true,
        },
      });
    }
    next();
  },

  reset(req, res, next) {
    let { email } = req.body;
    if (!validator.default.isEmail(email)) {
      return res.status(400).send({
        success: false,
        errors: {
          email: true,
        },
      });
    }
    next();
  },
};

module.exports = AuthValidator;
