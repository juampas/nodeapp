var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
var count = 1;

app.get('/', function (req, res) {
  var ip = req.headers['x-forwarded-for'].split(',')[0];
  var message = `App Node Count : ${count++} <br/> My IP Address  : ${ip}`;
  res.send(message);
  console.log(message);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
