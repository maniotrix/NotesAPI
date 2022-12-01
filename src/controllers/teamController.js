const teamModel = require("../models/team");

const createTeam = async (req, res) =>{
    
    const {short_name, full_name, wicketkeepers, batters, bowlers,all_rounders,logo_url} = req.body;

    const newTeam = new teamModel({
        short_name : short_name, 
        full_name : full_name,   
        wicketkeepers: wicketkeepers,
        batters: batters,
        bowlers: bowlers,
        all_rounders: all_rounders,
        logo_url : logo_url
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