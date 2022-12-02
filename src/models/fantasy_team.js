const mongoose = require("mongoose");

const FantasyTeamSchema = mongoose.Schema({

    short_name : {
        type : String,
        required: true
    }, 
    full_name : {
        type : String,
        required: true
    },   
    wicketkeepers: {
        type: [String],
        required: true
    },
    batters: {
        type: [String],
        required: true
    },
    bowlers: {
        type: [String],
        required: true
    },
    all_rounders: {
        type: [String],
        required: true
    },
    captain : {
        type : String,
        required: true
    },
    vice_captain : {
        type : String,
        required: true
    },

}, {timestamps : true});

module.exports = mongoose.model("fantasy_team", FantasyTeamSchema);