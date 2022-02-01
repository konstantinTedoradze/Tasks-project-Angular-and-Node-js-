const tasksDao = require("../dao/tasks-dao");

async function getAllTasks() {
  return await tasksDao.getAllTasks();
}

async function addTask(getInfo){
    return await tasksDao.addTask(getInfo);
}

async function deleteTask(todoListId) {
  return await tasksDao.deleteTask(todoListId);
}


module.exports = {
  getAllTasks,
  addTask,
  deleteTask
};