const { Schema, model } = require("mongoose");

const workoutSchema = new Schema({
  day: { type: Data, default: Date.now },
  excercises: [
    {
      type: {
        type: String,
        required: "enter type of workout",
      },
      name: {
        type: String,
        required: "enter specific workout name",
      },
      duration: {
        type: Number,
        required: "enter how many minutes long is the workout",
      },
      weight: {
        type: Number,
        required: "enter the added weight used",
      },
      reps: {
        type: Number,
        required: "enter the number of reps performed",
      },
      sets: {
        type: Number,
        required: "enter number of sets completed",
      },
    },
  ],
});
const Workout = model("Workout", workoutSchema);

module.exports = Workout;
