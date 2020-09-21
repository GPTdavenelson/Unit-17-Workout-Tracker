const Workout = require("../models/workout")

module.exports  = (app) => {

    app.get("/api/workouts", function (req, res) {
        Workout.find()
            .then(data => {
                res.json(data)
            })
            .catch(err => {
                res.json(err)
            })
    });

    app.post("/api/workouts", function (req, res) {
        Workout.create({})
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
   
    app.get("/api/workouts/range", ( {body, params}, res) => {
        Workout.find({})
            .then(data => {res.json(data);})
            .catch(err => {res.json(err);});
    });
    app.put("/api/workouts/:id", ({ body, params }, res) => {
        console.log(body)
        Workout.findByIdAndUpdate(
            params.id,
            { $push: { exercises: body } },
            { new: true, runValidators: true }
        )
            .then(data => res.json(data))
            .catch(err => {
                console.log("err", err)
                res.json(err)
            })
    });
    app.get("/api/workouts/range", ( {body, params}, res) => {
        Workout.find({})
            .then(data => {res.json(data);})
            .catch(err => {res.json(err);});
    });
}