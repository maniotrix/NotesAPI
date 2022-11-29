const contestModel = require("../models/contest");

const createContest = async (req, res) =>{
    
    const {team1, team2, contest_status, date, contest_mode,tournament} = req.body;

    const newContest = new contestModel({
        team1: team1,
        team2 : team2,
        contest_status : contest_status,
        date : date,
        contest_mode: contest_mode,
        tournament : tournament,
        userId : req.userId
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