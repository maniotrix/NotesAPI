const express = require("express");
const { getTeams, createTeam, getFilteredTeams } = require("../controllers/teamController");
const auth = require("../middlewares/auth");
const teamRouter = express.Router();

teamRouter.get("/", auth, getTeams);

teamRouter.post("/", auth, createTeam);

teamRouter.post("/filter", auth, getFilteredTeams);

module.exports = teamRouter;