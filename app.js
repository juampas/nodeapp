var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
var count = 0;

app.get('/', function (req, res) {
  res.send(`App Node : ${count++} - ${request.connection.remoteAddress}`);
  console.log(`Execute : ${count++} - ${request.connection.remoteAddress}`);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT} : ${count++}`);
});
