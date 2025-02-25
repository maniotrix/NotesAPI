const express = require("express");
const { getMatches, createMatch } = require("../controllers/matchController");
const auth = require("../middlewares/auth");
const matchRouter = express.Router();

matchRouter.get("/", auth, getMatches);

matchRouter.post("/", auth, createMatch);

module.exports = matchRouter;