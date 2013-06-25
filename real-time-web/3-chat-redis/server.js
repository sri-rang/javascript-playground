(function () {
  "use strict";

  var http = require("http");
  var fs = require("fs");
  var WebSocketServer = require("websocket").server;
  var redis = require("redis");

  var static_server = http.createServer(function (req, res) {
    res.writeHead(200);
    var file = req.url.indexOf("index.css") > -1 ? "index.css" : "index.html";
    res.write(fs.readFileSync(file));
    res.end();
  });

  var store = {redis: redis.createClient(), subscriber: redis.createClient()};

  var ws_server = new WebSocketServer({httpServer: static_server});

  ws_server.on("request", function (req) {
    var conn = req.accept(), channel = "channel-" + req.resource, list = "messages-" + req.resource;
    store.redis.lrange(list, 0, -1, function (err, messages) { conn.sendUTF(JSON.stringify(messages)); });
    store.subscriber.subscribe(channel);
    store.subscriber.on("message", function (target_channel, message) { if (target_channel === channel) conn.sendUTF(JSON.stringify(message)); });
    conn.on("message", function (message) {
      store.redis.rpush(list, message.utf8Data);
      store.redis.publish(channel, message.utf8Data);
    });
  });

  static_server.listen(8080);

  console.log("3-chat-redis app started..");

})();
