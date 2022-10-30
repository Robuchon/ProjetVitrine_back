//module dotenv
require("dotenv").config();

//le coucou de demarage
console.log("coucou");

//module express
const express = require("express");
const app = express();

//extensions d'express
const bodyParser = require("body-parser");
const cors = require("cors");

//module mongoose
require("./plugins/mongoose/mongoose.js");

//ajout des modules et extensions dans l'App
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//import des routes
const authRouter = require("./plugins/routes/auth.js");
const userSettingsRouter = require("./plugins/routes/userSettings.js");

//ajout des routes
app.use("/auth", authRouter);
app.use("/userSettings", userSettingsRouter);

//export de l'App
module.exports = app;
