const mongoose = require("mongoose");

const FantasyTeamSchema = mongoose.Schema({

    name : {
        type : String,
        required: true
    },
    team1_name : {
        type : String,
        required: true
    },
    team2_name : {
        type : String,
        required: true
    },
    team1_count : {
        type : Number,
        required: true
    },
    team2_count : {
        type : Number,
        required: true
    },
    wicketkeepers: {
        type: [{
            name: String,
            team_name: String
        }],
        required: true
    },
    batters: {
        type: [{
            name: String,
            team_name: String
        }],
        required: true
    },
    bowlers: {
        type: [{
            name: String,
            team_name: String
        }],
        required: true
    },
    all_rounders: {
        type: [{
            name: String,
            team_name: String
        }],
        required: true
    },
    captain : {
        type: {
            name: String,
            team_name: String
        },
        required: true
    },
    vice_captain : {
        type: {
            name: String,
            team_name: String
        },
        required: true
    },

}, {timestamps : true});

module.exports = mongoose.model("fantasy_team", FantasyTeamSchema);