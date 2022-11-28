const teamModel = require("../models/team");

const createTeam = async (req, res) =>{
    
    const {team1, team2, match_status, date, match_mode,tournament} = req.body;

    const newTeam = new teamModel({
        team1: team1,
        team2 : team2,
        match_status : match_status,
        date : date,
        match_mode: match_mode,
        tournament : tournament,
        userId : req.userId
    });

    try {
        
        await newTeam.save();
        res.status(201).json(newTeam);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
    
}

const getTeams = async (req, res) =>{
    try {
        
        const teams = await teamModel.find({userId : req.userId});
        res.status(200).json(teams);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createTeam,
    getTeams
}