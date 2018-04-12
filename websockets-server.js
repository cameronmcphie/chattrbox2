var WebSocket = require("ws");
var WebSocketServer = WebSocket.Server;
var port = 3001;
var ws = new WebSocketServer({
  port: port
});
var messages = [];
var topic = "";

console.log("websockets server started");

ws.on("connection", function(socket) {
  console.log("client connection established");

  if (topic != "")
    socket.send("*** Topic is '" + topic + "'");

  messages.forEach(function(msg) {
    socket.send(msg);
  });

  socket.on("message", function(data) {

    if (data.startsWith("/topic")) {

      if (data.slice(7) != "") {
        topic = data.slice(7);

        ws.clients.forEach(function(clientSocket) {
          clientSocket.send("*** Topic has changed to '" + topic + "'");
        });
      }
    } else {
      console.log("message received: " + data);
      ws.clients.forEach(function(clientSocket) {
        clientSocket.send(data);
      });
    }
  });
});
