const express = require("express");
const router = express.Router();

const familyLogic = require("../logic/family-logic");

router.get("/", async (request, response) => {
    try {
      const members = await familyLogic.getAllMembers();
  
      response.json(members);
    } catch (e) {
      console.log(e);
      response.status(600).json();
    }
});

module.exports = router;