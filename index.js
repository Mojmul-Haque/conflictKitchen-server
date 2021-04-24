const express = require("express");
const app = require('./app')
// const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log("the server  running  at http://localhost:4000/");
});
