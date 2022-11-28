const express = require("express");
const { getTeams, createTeam } = require("../controllers/teamController");
const auth = require("../middlewares/auth");
const teamRouter = express.Router();

teamRouter.get("/", auth, getTeams);

teamRouter.post("/", auth, createTeam);

module.exports = teamRouter;