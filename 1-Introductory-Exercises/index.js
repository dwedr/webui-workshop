// Your code goes here

const { HttpServer } = require("@aliceo2/web-ui");

const { WebSocket, WebSocketMessage } = require("@aliceo2/web-ui");

const { LogManager } = require("@aliceo2/web-ui");

const logger =  LogManager.getLogger('framework/ws');

const http = new HttpServer({ port: 8080 }, { expiration: "30s" });

http.addStaticPath("public");

http.get(
  "/public",
  (req, res) => {
    res.status(200).json({ message: "hi" });
  },
  { public: true }
);

const wb = new WebSocket(http);

wb.bind("hello", (message) => {
  logger.infoMessage(`Received message ${message.payload}`);
  //console.log(`Received message ${message.payload}`);
  return new WebSocketMessage(200)
    .setCommand("hello-back")
    .setPayload("hello-back");
});
