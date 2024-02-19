// Main component to integrate all components.

import React from "react";

import Login from "./Auth/Login";
import TaskPage from "./Tasks/TaskPage";

const App = () => {
  return (
    <>
      {/* <Login /> */}
      <TaskPage />
    </>
  );
};

// Example using socket.io-client
import io from "socket.io-client";

// const socket = io("http://localhost:8000/ws/task/");

// socket.on("connect", () => {
//   console.log("Connected to WebSocket");
// });

// socket.on("message", (data) => {
//   console.log("Received message:", data);
// });

// socket.emit("message", "Hello from client");

export default App;
