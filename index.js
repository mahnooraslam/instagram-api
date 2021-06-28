const app = require("express")();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 5000;
const url = 'https://instagram85.p.rapidapi.com/account/therealsaifii/info'
app.use(cors({ origin: "*" }));

var options = {
  method: 'GET',
  url: 'https://instagram85.p.rapidapi.com/account/" + userName + "/info',
  headers: {
    'x-rapidapi-key': 'd54f2722eamshd9a7361b4e9baa2p17c33djsn60caa28f7e25',
    'x-rapidapi-host': 'instagram85.p.rapidapi.com'
  }
};


/* axios.request(options).then(function (response) {
	console.log(response.data);
}).catch(function (error) {
	console.error(error);
});
*/
axios
    .request(url,{
	headers: {
    'x-rapidapi-key': 'd54f2722eamshd9a7361b4e9baa2p17c33djsn60caa28f7e25',
    'x-rapidapi-host': 'instagram85.p.rapidapi.com'
  }
})
    .then((response) => {
      res.send(response.data);
    })
    .catch((err) => {
      console.error(err);
      res.status(500).send("An error occurred, please try again later.");
    });

app.get("/", function (req, res) {
  res.send("Welcome instagram api API");
});

app.get("/account/:userName", function (req, res) {
  const query = req.params.query;

  
});

app.listen(port, function () {
  console.log(`Server is running on port ${port}`);
});
