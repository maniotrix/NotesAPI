const mongoose = require("mongoose");

const MatchSchema = mongoose.Schema({

    team1 : {
        type : String,
        required: true
    },
    team2 : {
        type: String,
        required: true
    },
    match_status : {
        type : String,
        required: true
    },
    date : {
        type : String,
        required: true
    },
    match_mode : {
        type : String,
        required: true
    },
    tournament : {
        type : String,
        required: true
    },

}, {timestamps : true});

module.exports = mongoose.model("match", MatchSchema);