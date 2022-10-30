const UserModel = require("../../plugins/mongoose/models/user");

const UserSettings = {
  switchTheme(req, res, next) {
    console.log(req.body.theme);
    UserModel.findByIdAndUpdate(
      req.decodedToken._id,
      {
        //list des chose a changer pour cette route
        theme: req.body.theme,
      },
      { new: true, runValidators: true }
    )
      .then((user) => {
        res
          .status(200)
          .send({ success: true, message: "Ok update user", data: user });
      })
      .catch((err) => {
        res.status(400).send({ success: false, message: "Erreur update user" });
      });
  },
};

module.exports = UserSettings;
