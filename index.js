const app = require("express")();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 3000;

var isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);

app.use(cors({ origin: "*" }));


var options = {
  method: 'GET',
  url: 'https://instagram40.p.rapidapi.com/account-info',
  params: {username: 'therealsaifii'},
  headers: {
    'x-rapidapi-key': 'eef6911d3fmshed2a542d137af63p1fd2f2jsn2180f0ddc901',
    'x-rapidapi-host': 'instagram40.p.rapidapi.com'
  }
};

app.get("/", function (req, res) {
  res.send("Welcome instagram api API");
});

app.get("/account/therealsaifii", function (req, res) {
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
