const router = require("express").Router();
const controllerHome = require("../controller/home_controller");

router.get("/", controllerHome.home);

router.get("*", controllerHome.err404);

module.exports = router;
