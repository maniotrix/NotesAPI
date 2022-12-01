const express = require("express");
const { getFantasyTeams, createFantasyTeam } = require("../controllers/fantasyTeamController");
const auth = require("../middlewares/auth");
const fantasyTeamRouter = express.Router();

fantasyTeamRouter.get("/", auth, getFantasyTeams);

fantasyTeamRouter.post("/", auth, createFantasyTeam);

module.exports = fantasyTeamRouter;