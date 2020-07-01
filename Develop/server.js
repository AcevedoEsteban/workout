const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const PORT = process.env.PORT || 300;

const workoutController = require("./controller/workout-controller");
const app = express();
app.use(morgan("short"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/workout", {
  useNewUrlParser: true,
  useFindAndModify: false,
});

// mongoose.connect("mongodb://localhost/workouts", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.use(workoutController);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
