const mongoose = require("mongoose");

const MatchSchema = mongoose.Schema({

    team1 : {
        short_name: String,
        team1_id: String
    },
    team2 : {
        short_name: String,
        team2_id: String
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
    mega_prize : {
        type : String,
        required: true
    },
    contests: {
        type: [String],
        required: true
    }

}, {timestamps : true});

module.exports = mongoose.model("match", MatchSchema);