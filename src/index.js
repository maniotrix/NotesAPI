const express = require("express");
const app = express();
const noteRouter = require("./routes/noteRoutes");
const userRouter = require("./routes/userRoutes");
const matchRouter = require("./routes/matchRoutes");
const teamRouter = require("./routes/teamRoutes");
const fantasyTeamRouter = require("./routes/fantasyTeamRoutes");
const contestRouter = require("./routes/contestRoutes");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const mongoose = require("mongoose");


app.use(express.json());

app.use(cors());

app.use("/users", userRouter);
app.use("/note", noteRouter);
app.use("/match", matchRouter);
app.use("/contest", contestRouter);
app.use("/team", teamRouter);
app.use("/fantasyteam", fantasyTeamRouter);


app.get("/", (req, res) =>{
    res.send("Notes API From CheezyCode");
});

const PORT = process.env.PORT || 5000;
const uri = "mongodb+srv://admin:admin@cluster0.patigyo.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri)
.then(()=>{
    app.listen(PORT, ()=>{
        console.log("Server started on port no. " + PORT);
    });
})
.catch((error)=>{
    console.log(error);
})


