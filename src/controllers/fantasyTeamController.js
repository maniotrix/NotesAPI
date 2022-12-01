const fantasyTeamModel = require("../models/fantasy_team");

const createFantasyTeam = async (req, res) =>{
    
    const {short_name, full_name, wicketkeepers, batters, bowlers,all_rounders,logo_url} = req.body;

    const newFantasyTeam = new fantasyTeamModel({
        short_name : short_name, 
        full_name : full_name,   
        wicketkeepers: wicketkeepers,
        batters: batters,
        bowlers: bowlers,
        all_rounders: all_rounders,
        logo_url : logo_url
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