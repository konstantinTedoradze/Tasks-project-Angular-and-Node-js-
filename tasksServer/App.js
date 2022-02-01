const express = require("express");
const server = express();
const familyController = require("./controllers/family-controller");
const tasksController = require("./controllers/tasks-controller");


const cors = require("cors");
server.use(cors({ origin: "http://localhost:4200" }));


server.use(express.json());

server.use("/members", familyController);
server.use("/tasks", tasksController);

server.listen(3001, () => console.log("Listening on http://localhost:3001"));


