(function () {
  "use strict";

  var http = require("http");
  var fs = require("fs");
  var WebSocketServer = require("websocket").server;

  var static_server = http.createServer(function (req, res) {
    res.writeHead(200);
    var file = req.url.indexOf("index.css") > -1 ? "index.css" : "index.html";
    res.write(fs.readFileSync(file));
    res.end();
  });

  var store = {connections: {}, messages: {}};

  var ws_server = new WebSocketServer({httpServer: static_server});

  ws_server.on("request", function (req) {
    var conn = req.accept(), room = req.resource;
    store.connections[room] = store.connections[room] || [];
    store.connections[room].push(conn);
    store.messages[room] = store.messages[room] || [];
    store.messages[room].forEach(function (message) {
      conn.sendUTF(message.utf8Data);
    });
    conn.on("message", function (message) {
      store.messages[room].push(message);
      store.connections[room].forEach(function (conn) {
        conn.sendUTF(message.utf8Data);
      });
    });
  });

  static_server.listen(8080);

  console.log("2-chat-rooms started..");

})();
