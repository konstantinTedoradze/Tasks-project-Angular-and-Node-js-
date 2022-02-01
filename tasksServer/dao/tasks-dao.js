const connection = require("./connection-wrapper");

async function getAllTasks() {
  const sql = `SELECT  taskslist.description, familymembers.name, taskslist.creation_date, taskslist.id
  FROM taskslist
  LEFT JOIN familymembers
  ON familymembers.id = taskslist.family_id
  ORDER BY taskslist.creation_date;`;
  return await connection.execute(sql);
}

async function addTask(getInfo) {
  const sql = `INSERT INTO taskslist (family_id, description)
   VALUES (?,?);`;

   let parameters = [
    getInfo.familyId,
    getInfo.description
  ];

  const taskListAdded = await connection.executeWithParameters(sql,parameters);
  return taskListAdded;
}


async function deleteTask(taskId) {
    const sql = `Delete FROM taskslist
    WHERE id=${taskId}`;
    const deleted = await connection.execute(sql);
    return deleted.affectedRows;
}


module.exports = {
  getAllTasks,
  addTask,
  deleteTask
};
