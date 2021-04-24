const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
const router = require("./Routes/food.routes");
app.get("/", (req, res) => {
  res.send("helllo bd");
});
app.use("/", router);

module.exports = app;
