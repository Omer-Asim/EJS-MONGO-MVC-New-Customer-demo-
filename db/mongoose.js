const mongoose = require("mongoose");

mongoose
  .connect(process.env.MONGO_BAGLANTI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  })
  .then(() => {
    console.log("MONGOOSE BAŞARILI");
  })
  .catch((err) => {
    console.log("MONGOOSE HATA", err);
  });
///MONGOOSE///
