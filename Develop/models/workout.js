const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  day: { type: Date, default: () => new Date() },
  exercises: [
    {
      type: String,

      name: String,
      // required: "enter specific workout name",

      duration: Number,
      // required: "enter how many minutes long is the workout",

      weight: Number,
      // required: "enter the added weight used",

      reps: Number,
      // required: "enter the number of reps performed",

      sets: Number,
      // required: "enter number of sets completed",
    },
  ],
});
const Workout = model("workouts", workoutSchema);

module.exports = Workout;
