const router = require("express").Router();
const controllerTest = require("../controller/admin_controller");
const upload = require("../middleware/multer");

router.get("/", controllerTest.adminDatas);

router.post("/api/urunsil", controllerTest.urunsil);

router.post("/proje/ekle", upload.array("dosya", 99), controllerTest.urunekle);

module.exports = router;
// upload.array("dosya,6")

// var cpUpload = upload.fields([{ name: 'audio_file', maxCount: 1 }, { name: 'gallery', maxCount: 8 }])

// upload.fields([{ name: "dosya", maxCount: 4 }]),
// const upload = require("../middleware/multer");
