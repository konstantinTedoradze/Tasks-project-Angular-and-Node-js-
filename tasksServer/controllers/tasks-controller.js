const express = require("express");
const router = express.Router();

const tasksLogic = require("../logic/tasks-logic");

router.get("/", async (request, response) => {
    try {
      const todos = await tasksLogic.getAllTasks();
  
      response.json(todos);
    } catch (e) {
      console.log(e);
      response.status(600).json();
    }
});

router.post("/addTask", async (request, response) => {
  try {
    const getInfo = request.body;
    const results = await tasksLogic.addTask(getInfo);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.status(600).json();
}
 
});

router.delete("/delete/:id", async (request, response) => {
  try {
    const taskId = request.params.id;
    const results = await tasksLogic.deleteTask(taskId);
    response.json(results);
  } catch (e) {
    console.log(e);
    response.status(600).json();
}
 
});



module.exports = router;