const mongoose = require("mongoose");

const kursSchema = new mongoose.Schema({
  Ime: {
    type: String,
  },
  Adresa: {
    type: String,
  },
  Oblast: {
    type: String,
  },
});

const Avtomobil = mongoose.model("Avtomobili", avtoSchema);

module.exports = Kurs;