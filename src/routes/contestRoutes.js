const express = require("express");
const { getContests, createContest } = require("../controllers/contestController");
const auth = require("../middlewares/auth");
const contestRouter = express.Router();

contestRouter.get("/", auth, getContests);

contestRouter.post("/", auth, createContest);

module.exports = contestRouter;