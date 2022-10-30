const jwt = require("jsonwebtoken");
const saltRounds = 10;
const JWT_KEY = process.env.JWT_SECRET;

const bcrypt = require("bcrypt");

const UserModel = require("../../plugins/mongoose/models/user");

const Auth = {
  createAccount(req, res, next) {
    UserModel.insertMany(req.body)
      .then((newUser) => {
        console.log(newUser);
        next();
      })
      .catch((err) => {
        console.log("pas cool", err);
        return res.status(400).send({
          success: false,
          data: err,
          errors: { email: "error", username: "error" },
        });
      });
  },

  async login(req, res) {
    const username = req.body.username;
    let password = "";
    if (req.body.passwordNoHash) {
      password = req.body.passwordNoHash;
    } else {
      password = req.body.password;
    }

    return UserModel.findOne({ username: username })
      .select("+password")
      .then((user) => {
        if (user === null) {
          return res.status(401).send({
            success: false,
            errors: { username: "Informations de connexion incorrectes" },
          });
        }
        let passwordsDoMatch = bcrypt.compareSync(
          password,
          user.password,
          saltRounds
        );
        if (!passwordsDoMatch) {
          return res.status(401).send({
            success: false,
            errors: { username: "Informations de connexion incorrectes" },
          });
        } else {
          let data = {
            prologue: user.prologue,
            _id: user._id,
            username: user.username,
            email: user.email,
            theme: user.theme,
            language: user.language,
          };
          jwt.sign(
            { _id: user._id },
            JWT_KEY,
            { expiresIn: "60 days" },
            (err, token) => {
              if (err) console.log(err);
              res.status(200).send({
                token: token,
                success: true,
                message: "Login ok",
                data: data,
              });
            }
          );
        }
      })
      .catch((err) => console.log("pas cool", err));
  },
  async loginWithToken(req, res) {
    UserModel.findOne({ _id: req.decodedToken._id })
      .exec((err, user) => {
        if (err)
          return res.status(400).send({
            success: false,
            message: "Erreur data user",
          });
        if (user === null) {
          return res.status(400).send({
            success: false,
            message: "Erreur user delete",
          });
        }
        return res.status(200).send({
          success: true,
          message: "Ok data user",
          data: user,
        });
      });
  },
};

module.exports = Auth;
