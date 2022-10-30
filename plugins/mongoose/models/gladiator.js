const mongoose = require("mongoose");
const gladiatorSchema = mongoose.Schema(
  {
    proprietaire: {
      type: mongoose.ObjectId,
      ref: "user",
    },
    pseudoPersonnage: {
      type: String,
      minLength: 3,
      maxLength: 38,
    },
    visuel: {
      type: String,
      default: 1,
    }, //String Hasher
    stats: {
      for: {
        type: Number,
        default: 5,
      },
      def: {
        type: Number,
        default: 5,
      },
      agi: {
        type: Number,
        default: 5,
      },
      pv: {
        type: Number,
        default: 5,
      },
      reste: {
        type: Number,
        default: 20,
      },
    },
    equipements: {
      tete: {
        type: String,
        default: "",
      },
      torse: {
        type: String,
        default: "",
      },
      jambe: {
        type: String,
        default: "",
      },
      mainGauche: {
        type: String,
        default: "",
      },
      mainDroit: {
        type: String,
        default: "",
      },
    },
    bio: {
      type: String,
      default: "fr",
    },
    reputation: {
      type: Number,
      default: 20,
    },
    argent: {
      type: Number,
      default: 100,
    },
    vie: {
      type: Number,
      default: 20,
    },
  },
  {
    timestamps: true,
  }
);

const GladiatorModel = mongoose.model("gladiator", gladiatorSchema);

module.exports = GladiatorModel;
