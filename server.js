import WebSocket, { WebSocketServer } from "ws";

const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", ws => {
  console.log("Cliente conectado");
  ws.send("Hola desde WebSocket!");
});
