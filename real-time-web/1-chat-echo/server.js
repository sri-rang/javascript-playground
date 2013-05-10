(function () {
  "use strict";

  var http = require("http");
  var fs = require("fs");
  var WebSocketServer = require("websocket").server;

  var static_server = http.createServer(function (req, res) {
    var file = req.url.substring(1) || "index.html", file_exists = fs.existsSync(file);
    if (file_exists) {
      res.writeHead(200);
      res.write(fs.readFileSync(file));
    } else {
      res.writeHead(404);
    }
    res.end();
  });

  var ws_server = new WebSocketServer({httpServer: static_server});

  ws_server.on("request", function (req) {
    var conn = req.accept();
    conn.on("message", function (message) {
      conn.sendUTF(message.utf8Data);
    });
    setInterval(function () {
      conn.sendUTF("ping even five seconds ... " + new Date().toISOString())
    }, 5000);
  });

  static_server.listen(8080);

  console.log("1-chat-echo started..");


})();
