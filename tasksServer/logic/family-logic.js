const familyDao = require("../dao/family-dao");

async function getAllMembers() {
  return await familyDao.getAllMembers();
}

module.exports = {
    getAllMembers
};