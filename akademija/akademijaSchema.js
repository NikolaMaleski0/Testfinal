const mongoose = require("mongoose");

const akademijaSchema = new mongoose.Schema({
    NazivNaKurs: {
      type: String,
    },
    Adresa: {
        type: String,
      },
  });

const Avtomobil = mongoose.model("Akademija", akademijaSchema);

module.exports = Akademija; 