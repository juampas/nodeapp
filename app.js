var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
var count = 0;

app.get('/', function (req, res) {
  res.send('Hello World!');
  console.log(`Execute : ${count++}`);
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT} : ${count++}`);
});
