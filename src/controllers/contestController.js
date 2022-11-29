const contestModel = require("../models/contest");

const createContest = async (req, res) =>{
    
    const {match_id, prize_pool, entry_fee, total_spots, first_prize,winnner_teams_percent,max_team_entries} = req.body;

    const newContest = new contestModel({
        match_id : match_id,
        prize_pool : prize_pool,
        entry_fee : entry_fee,
        total_spots : total_spots,
        first_prize : first_prize,
        winnner_teams_percent : winnner_teams_percent,
        max_team_entries : max_team_entries,
    });

    try {
        
        await newContest.save();
        res.status(201).json(newContest);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
    
}

const getContests = async (req, res) =>{
    try {
        
        const contests = await contestModel.find({userId : req.userId});
        res.status(200).json(contests);

    } catch (error) {
        console.log(error);
        res.status(500).json({message: "Something went wrong"});
    }
}

module.exports = {
    createContest,
    getContests
}