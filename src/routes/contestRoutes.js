const express = require("express");
const { getContests, createContest, getFilteredContests} = require("../controllers/contestController");
const auth = require("../middlewares/auth");
const contestRouter = express.Router();

contestRouter.get("/", auth, getContests);

contestRouter.post("/", auth, createContest);

contestRouter.get("/filter", auth, getFilteredContests);

module.exports = contestRouter;