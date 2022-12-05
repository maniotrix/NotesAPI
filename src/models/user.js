const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({

    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    matches_joined: {
        matches: [
            {
                match_id: String,
                contests_joined: [{
                        contest_id: String,
                        fantasy_teams: [String]
                    }],
                fantasy_teams: [String]
            }
        ]
    }

}, { timestamps: true });

module.exports = mongoose.model("User", UserSchema);