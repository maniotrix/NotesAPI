const fantasyTeamModel = require("../models/fantasy_team");

const createFantasyTeam = async (req, res) =>{
    
    const {name,team1_name,team2_name,team1_count,team2_count, wicketkeepers, batters, bowlers,all_rounders,captain, vice_captain} = req.body;

    const newFantasyTeam = new fantasyTeamModel({
        name: name,
        team1_name: team1_name,
        team2_name: team2_name,
        team1_count: team1_count,
        team2_count:team2_count,
        wicketkeepers: wicketkeepers,
        batters: batters,
        bowlers: bowlers,
        all_rounders: all_rounders,
        captain: captain,
        vice_captain: vice_captain
    });

    try {
        
        await newFantasyTeam.save();
        res.status(201).json(newFantasyTeam);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
    
}

const getFantasyTeams = async (req, res) =>{
    try {
        
        const fantasyTeams = await fantasyTeamModel.find({userId : req.userId});
        res.status(200).json(fantasyTeams);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createFantasyTeam,
    getFantasyTeams
}