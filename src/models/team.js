const mongoose = require("mongoose");

const TeamSchema = mongoose.Schema({

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
    logo_url : {
        type : String,
    }, 

}, {timestamps : true});

module.exports = mongoose.model("team", TeamSchema);