const Proje = require("../models/userModels.js");
const home = async (req, res) => {
  try {
    Proje.find({}, (err, gelenVeri) => {
      if (err) throw err;
      else {
        res.render("home", { data: gelenVeri });
      }
    });
  } catch (error) {
    console.log("HATA", error);
  }
};
const err404 = async (req, res) => {
  res.send("<h3>404 NOT FOUND </h3>");
};
module.exports = {
  home,
  err404,
};
