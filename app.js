var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
var count = 1;

app.get('/', function (req, res) {
  res.send(`App Node : ${count} - ${req.connection.remoteAddress}`);
  console.log(`Execute : ${count++} - ${req.connection.remoteAddress}`);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
