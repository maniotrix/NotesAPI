const mongoose = require("mongoose");

const ContestSchema = mongoose.Schema({

    match_id : {
        type : String
    },
    prize_pool : {
        type : String,
        required: true
    },
    entry_fee : {
        type : String,
        required: true
    },
    total_spots : {
        type : Number,
        required: true
    },
    first_prize : {
        type : String,
        required: true
    },
    winner_teams_percent : {
        type : Number,
        required: true
    },
    max_team_entries : {
        type : Number,
        required: true
    },

    

}, {timestamps : true});

module.exports = mongoose.model("contest", ContestSchema);