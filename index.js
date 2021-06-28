const app = require("express")();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 3000;

var isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);

app.use(cors({ origin: "*" }));


var options = {
  method: 'GET',
  url: 'https://instagram40.p.rapidapi.com/account-info',
  params: {username: 'cristiano'},
  headers: {
    'x-rapidapi-key': 'd54f2722eamshd9a7361b4e9baa2p17c33djsn60caa28f7e25',
    'x-rapidapi-host': 'instagram40.p.rapidapi.com'
  }
};

app.get("/", function (req, res) {
  res.send("Welcome instagram api API");
});

app.get("/account/:userName", function (req, res) {
  const query = req.params.query;
  axios
    .request(options)
    .then((response) => {
      res.json(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred, please try again later.");
    });
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
