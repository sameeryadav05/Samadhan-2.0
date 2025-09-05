const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const cors = require("cors");

const app = express();
app.use(cors());

const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

// store users
let onlineUsers = {};

io.on("connection", (socket) => {
  console.log("User connected:", socket.id);

  // when user joins
  socket.on("new_user", (username) => {
    onlineUsers[socket.id] = username;
    io.emit("update_users", Object.values(onlineUsers)); // send updated list
  });

  // when user sends a message
  socket.on("send_message", (data) => {
    io.emit("receive_message", data);
  });

  // when user disconnects
  socket.on("disconnect", () => {
    delete onlineUsers[socket.id];
    io.emit("update_users", Object.values(onlineUsers));
    console.log("User disconnected:", socket.id);
  });
});

server.listen(5000, () => {
  console.log("Server running on port 5000");
});
