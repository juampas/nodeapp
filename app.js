var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
var count = 1;

app.get('/', function (req, res) {
  var message = `App Node Count : ${count++} \n My IP Address  : ${req.connection.remoteAddress}`;
  res.send(message);
  console.log(message);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
