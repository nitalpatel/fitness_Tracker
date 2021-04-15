var db = require('../models');

module.exports = function (app) {

    app.get("/api/workouts", (req, res) => {

        db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            }]).then((data) => {
                res.json(data);
            }).catch((error) => {
                res.sendStatus(500).json(error);
            });
    });

    app.post("/api/workouts", (req, res) => {
        db.Workout.create({}
            // here we type: req.body.type,
            // -->name: req.body.name,
            // time duration: req.body.duration,
            // weight: req.body.weight,
            // reps: req.body.reps,
            // set's: req.body.sets
            , (err, data) => {
                if (err) return err;
                else res.json(data);
            })
        // res.json({_id:123});
    });

    app.put("/api/workouts/:id", (req, res) => {
        db.Workout.findByIdAndUpdate(req.params.id, { $push: { exercises: req.body } }, (err, data) => {
            if (err) return err;
            else res.json(data);
        })
    });


    app.get("/api/workouts/range", (req, res) => {
        db.Workout.aggregate([
            {
                $addFields: {
                    totalDuration: { $sum: "$exercises.duration" }
                }
            },
            { $limit: 7 }
        ]).then((data) => {
            res.json(data);
        }).catch((error) => {
            res.sendStatus(500).json(error);
        });
    });

};