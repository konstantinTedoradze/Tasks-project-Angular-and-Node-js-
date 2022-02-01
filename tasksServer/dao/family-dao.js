const connection = require("./connection-wrapper");


async function getAllMembers() {
  const sql = `SELECT 
  familymembers.id,
  familymembers.name
  FROM familymembers`;
  return await connection.execute(sql);
}


module.exports = {
  getAllMembers 
};
