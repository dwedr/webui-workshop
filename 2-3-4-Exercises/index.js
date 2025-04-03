const path = require("path");
const config = require("./config.js");

const { HttpServer } = require("@aliceo2/web-ui");
const { WebSocket, WebSocketMessage } = require("@aliceo2/web-ui");
const applicationService = require("./lib/applicationService.js");

const http = new HttpServer(config.http, config.jwt, config.oAuth);
http.addStaticPath(path.join(__dirname, "public"));

http.get("/info", (_req, res) => {
  res.status(200).json(applicationService.getInfo());
});

const ws = new WebSocket(http);

ws.bind("random", (msg) => {
  console.log(msg);
  try {
    return new WebSocketMessage()
      .setCommand("random-res")
      .setPayload({ number: Math.floor(Math.random() * 10) });
  } catch (error) {
    return new WebSocketMessage().setCommand("error").setPayload(error.message);
  }
});

setInterval(() => {
  ws.broadcast(new WebSocketMessage().setCommand("repeat"));
}, 5000);
