var express = require('express');
var app = express();
const PORT = process.env.PORT || 5000
var count = 1;

app.get('/', function (req, res) {
  
  var ipAddr = req.headers["x-forwarded-for"];
  if (ipAddr){
    var list = ipAddr.split(",");
    ipAddr = list[list.length-1];
  } else {
    ipAddr = req.connection.remoteAddress;
  }
  
  var message = `> Web App Node Count : ${count++} <br/> My IP Address  : ${ipAddr} <`;
  
  res.send(message);  
  console.log(message);
});

app.get('/version', function (req, res) {
  res.send(`Version 1.0`);  
});

app.listen(PORT, function () {
  console.log(`Example app listening on port ${PORT}`);
});
