const path = require("path");
const http = require("http");
const express = require('express')
const {Server}= require("socket.io");

const publicPath = path.join(__dirname, "../public");
const port = process.env.PORT || 3000;

console.log(publicPath)
const app = express()
const server = http.createServer(app)
const io = new Server(server);
// const io = socketIO(server)
// app.set('view', publicPath)
// app.set("view engine", 'hbs')
app.use(express.static(publicPath))


io.on("connection", (socket) => {
  console.log("New user connected");

  socket.emit("newMessage", {
    from: "John",
    text: "See you then",
    createdAt: 123123,
  });

  socket.emit("newEmail", {
    from: "mike@example.com",
    text: "Hey. What is going on.",
    createdAt: 123,
  });
//   socket.on("createEmail", (newEmail) => {
//     console.log("createEmail", newEmail);
//   });
socket.on("createMessage", (message) => {
  console.log("createMessage", message);
  io.emit("newMessage", {
    from: message.from,
    text: message.text,
    createdAt: new Date().getTime(),
  });
});
});
io.on("disconnect", () => {
  console.log("User was disconnected");
});

server.listen(port, () => {
    console.log('Server is up on port 3000')
})