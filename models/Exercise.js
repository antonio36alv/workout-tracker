const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ExerciseSchema = new Schema({
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
})

const Exercise = mongoose.model("Exercise", ExerciseSchema)

module.exports = Exercise