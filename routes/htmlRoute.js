                                //Dependencies
var path = require('path');

//Routes
module.exports = function (app) {
    app.get("/", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });

    app.get("/stats", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/stats.html"));
    });

    // app.get("/newWorkout",(req,res)=>{
    //     res.sendFile(path.join(__dirname,"../public/exercise.html"));
    // });

    app.get("/exercise", (req, res) => {
        res.sendFile(path.join(__dirname, "../public/exercise.html"));
    });

};