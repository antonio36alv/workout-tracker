const mongoose = require("mongoose")
const Schema = mongoose.Schema

const WorkoutSchema = new Schema({
    day: Date,
    totalDuration: Number,
    exercises: [
        {
            type: {
                type: String,
                required: true
            },
            name: {
                type: String,
                required: true
            },
            duration: {
                type: Number,
                required: true
            },
            distance: Number,
            weight: Number,
            sets: Number,
            reps: Number
        }
    ]
})

WorkoutSchema.methods.setTotalDuration = () => {
console.log("singing im still wrong")
    for(e of exercises) this.totalDuration =+ e.duration
    return this.totalDuration
}

const Workout = mongoose.model("Workout", WorkoutSchema)

module.exports = Workout