const app = require("express")();
const axios = require("axios");
const cors = require("cors");
const port = process.env.PORT || 3000;

var isHTML = RegExp.prototype.test.bind(/(<([^>]+)>)/i);

app.use(cors({ origin: "*" }));

/*
var options = {
  method: 'GET',
  url: 'https://instagram40.p.rapidapi.com/account-info',
  params: {username: 'string(userName)'},
  headers: {'x-rapidapi-key': 'eef6911d3fmshed2a542d137af63p1fd2f2jsn2180f0ddc901','x-rapidapi-host': 'instagram40.p.rapidapi.com'}
  
}; */

let HeaderOptions = {
  headers: {'x-rapidapi-key': 'd54f2722eamshd9a7361b4e9baa2p17c33djsn60caa28f7e25','x-rapidapi-host': 'instagram-growth.p.rapidapi.com'}
}
  
app.get("/", function (req, res) {
  res.send("Welcome instagram api API");
});

app.get("/account/:userName", function (req, res) {
  const user_name = req.params.userName;
  axios
    .request('https://instagram-growth.p.rapidapi.com/v2/profile?username='+user_name , HeaderOptions)
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
