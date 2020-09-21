const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//workout schema. Key values based on instances in the seed file.
const workoutSchema = new Schema(
  {
    day: {
      type: Date,
      default: () => new Date()
    },
    exercises: [
      {
        type: {
          type: String,
          trim: true,
          required: "Cardio or Resistance?"
        },
        name: {
          type: String,
          trim: true,
          required: "Name of exercise"
        },
        duration: {
          type: Number,
          required: "Total time"
        },
        weight: {
          type: Number
        },
        reps: {
          type: Number
        },
        sets: {
          type: Number
        },
        distance: {
          type: Number
        }
      }
    ]
  })


const Workout = mongoose.model("Workout", workoutSchema);
module.exports = Workout;