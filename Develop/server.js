const express = require("express");
const mongoose = require("mongoose");
const workoutController = require("./controller/workout-controller");
const htmlController = require("./controller/html-controller");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan("short"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));
app.use(htmlController);
app.use(workoutController);

app.use(express.static("public"));
mongoose.connect("mongodb://localhost:27017/workout", {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});

// mongoose.connect("mongodb://localhost/workouts", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
