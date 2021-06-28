const app = require("express")();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 5000;

app.use(cors({ origin: "*" }));

var options = {
  method: 'GET',
  url: 'https://instagram85.p.rapidapi.com/account/badgalriri/info',
  headers: {
    'x-rapidapi-key': 'eef6911d3fmshed2a542d137af63p1fd2f2jsn2180f0ddc901',
    'x-rapidapi-host': 'instagram85.p.rapidapi.com'
  }
};

axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});

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
