var http = require("http");
var fs = require("fs");
var extract = require("./extract");
var wss = require("./websockets-server"); /*eslint no-unused-vars: 0*/
var mime = require("mime");

var handleError = function(err, res) {
  fs.readFile("app/error.html", "utf-8", function(err, page) {
    res.writeHead(404, {
      "Content-Type": "text/html"
    });
    res.write(page);
    res.end();
  });
};

var server = http.createServer(function(req, res) {
  console.log("Responding to a request.");

  var filePath = extract(req.url);

  res.setHeader("Content-Type", mime.getType(filePath));

  fs.readFile(filePath, function(err, data) {
    if (err) {
      handleError(err, res);
      return;
    } else {
      res.end(data);
    }
  });
});
server.listen(3000);
