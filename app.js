require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
require("./db/mongoose");
const admin_Router = require("./routers/admin_Router");
const HomeRouter = require("./routers/home");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname + "/public"));
app.set("view engine", "ejs");

app.get("/", HomeRouter);
app.use("/admin", admin_Router);
app.get("*", HomeRouter);
app.listen(5000, () => {
  console.log("Server 5000 portunda çalışıyor");
});
