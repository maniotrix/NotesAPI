const mongoose = require("mongoose");

const ContestSchema = mongoose.Schema({

    match_id : {
        type : String,
        required: true
    },
    prize_pool : {
        type : Number,
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
    winnner_teams_percent : {
        type : Number,
        required: true
    },
    max_team_entries : {
        type : Number,
        required: true
    },

    

}, {timestamps : true});

module.exports = mongoose.model("contest", ContestSchema);