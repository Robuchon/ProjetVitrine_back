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
require("./plugin/mongoose/mongoose");

//ajout des modules et extensions dans l'App
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//import des routes

//ajout des routes

//export de l'App
module.exports = app;