const mongoose = require("mongoose")

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/workout", { useNewUrlParser: true})

const db = require("../models")
module.exports = app => {

    //getLastWorkout()
    ///api/workouts

    app.get("/api/workouts", (req, res) => {

        db.Workout.find({}).limit(1).sort("-day").then( data => res.json(data))


    })

    //addExercise(data)
    //put 
    app.put("/api/workouts/:id", (req, res) => {

        db.Workout.findOneAndUpdate({_id: req.params.id}, {$push : { exercises: req.body}})
            .then( data => res.json(data))

    })


    app.post("/api/workouts", (req, res) => {

        const doc = { day: new Date().setDate(new Date().getDate()) }
        
        db.Workout.create(doc).then( data => res.json(data))
    })
    
    app.get("/api/workouts/range", (req, res) => {

        db.Workout.find({}).then( data => res.json(data))
    })
}