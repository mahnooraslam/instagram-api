var express = require("express");
var ig = require("instagram-node").instagram();
var app = express();

const port = process.env.PORT || 3000;

app.get("/", function (req, res) {
  res.send("Welcome to Instagram api");
});

app.listen(port, function (req, res) {
  console.log(`Server is running on port ${port}`);
});
