const Proje = require("../models/userModels.js");

const adminDatas = async (req, res) => {
  try {
    await Proje.find({}, (err, gelenVeri) => {
      if (err) throw err;
      else {
        res.render("admin/adminHome", {
          data: gelenVeri,
          isSuccess: true,
          msg: "ok",
        });
      }
    });
  } catch (error) {
    res.render("admin/adminhome", { msg: error });
  }
};

const urunsil = async (req, res, next) => {
  try {
    Proje.deleteOne({ _id: req.body.id }, function (err, gelenVeri) {
      if (!err) {
        res.redirect("/admin");
      } else {
        res.render("admin/adminhome", { isSuccess: false });
      }
    });
  } catch (error) {
    console.log("HATA", error);
  }
};
const urunekle = async (req, res) => {
  var resimLinki1 = "";
  var resimLinki2 = "";
  var resimLinki3 = "";
  var resimLinki4 = "";

  console.log("RESİM MİKTARI", req.files);
  console.log("RESİM MİKTARI", req.file);

  try {
    if (req.files.length > 4) throw "4 TANE DEN FAZLA RESİM";
    else if (req.files[0] && req.files[1] && req.files[2] && req.files[3]) {
      resimLinki1 = "../resimler/" + req.files[0].filename;
      resimLinki2 = "../resimler/" + req.files[1].filename;
      resimLinki3 = "../resimler/" + req.files[2].filename;
      resimLinki4 = "../resimler/" + req.files[3].filename;
    } else if (req.files[0] && req.files[1] && req.files[2]) {
      resimLinki1 = "../resimler/" + req.files[0].filename;
      resimLinki2 = "../resimler/" + req.files[1].filename;
      resimLinki3 = "../resimler/" + req.files[2].filename;
      resimLinki4 = "";
    } else if (req.files[0] && req.files[1]) {
      resimLinki1 = "../resimler/" + req.files[0].filename;
      resimLinki2 = "../resimler/" + req.files[1].filename;
      resimLinki3 = "";
      resimLinki4 = "";
    } else if (!req.files[1] && !req.files[2] && !req.files[3]) {
      resimLinki1 = "../resimler/" + req.files[0].filename;
      resimLinki2 = "";
      resimLinki3 = "";
      resimLinki4 = "";
    } else if (
      !req.files[0] &&
      !req.files[1] &&
      !req.files[2] &&
      !req.files[3]
    ) {
      resimLinki1 = "";
      resimLinki2 = "";
      resimLinki3 = "";
      resimLinki4 = "";
    }
    var ekle = new Proje({
      title: req.body.title,
      content: req.body.content,
      projeYeri: req.body.projeYeri,
      projeTipi: req.body.projeTipi,
      musteri: req.body.musteri,
      resimler: {
        bir: resimLinki1,
        iki: resimLinki2,
        uc: resimLinki3,
        dort: resimLinki4,
      },
    });
    ekle.save((err) => {
      if (err) {
        res.redirect("/admin");
      } else {
        res.redirect("/admin");
      }
    });
  } catch (error) {
    res.redirect("/admin");
  }
};

module.exports = {
  adminDatas,
  urunsil,
  urunekle,
};
