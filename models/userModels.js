const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const projeSchema = new mongoose.Schema({
  title: String,
  content: String,
  projeYeri: String,
  projeTipi: String,
  musteri: String,
  resimler: {
    bir: String,
    iki: String,
    uc: String,
    dort: String,
  },
});

const Proje = mongoose.model("Proje", projeSchema);

module.exports = Proje;
