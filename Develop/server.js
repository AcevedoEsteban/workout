const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
