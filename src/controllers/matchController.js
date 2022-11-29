const matchModel = require("../models/match");

const createMatch = async (req, res) =>{
    
    const {team1, team2, match_status, date, match_mode,tournament,mega_prize} = req.body;

    const newMatch = new matchModel({
        team1: team1,
        team2 : team2,
        match_status : match_status,
        date : date,
        match_mode: match_mode,
        tournament : tournament,
        userId : req.userId,
        mega_prize : mega_prize
    });

    try {
        
        await newMatch.save();
        res.status(201).json(newMatch);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
    
}

const getMatches = async (req, res) =>{
    try {
        
        const teams = await matchModel.find({userId : req.userId});
        res.status(200).json(teams);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createMatch,
    getMatches
}