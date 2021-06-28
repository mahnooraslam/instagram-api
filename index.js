const app = require("express")();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));

app.get("/", function (req, res) {
  res.send("Welcome instagram api API");
});

app.get("/instagram/:query", function (req, res) {
  const query = req.params.query;

  axios
    .get("https://www.instagram.com/explore/tags/" + query + "/?__a=1")
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred, please try again later.");
    });
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
