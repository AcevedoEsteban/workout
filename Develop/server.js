const express = require("express");
const mongoose = require("mongoose");
const workoutController = require("./controller/workout-controller");
const htmlController = require("./controller/html-controller");
const morgan = require("morgan");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(morgan("short"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(express.static("public"));
// mongoose.connect(
//   process.env.MONGODB_URI ||
//     "mongodb://user:password1@ds211259.mlab.com:11259/heroku_qfb9kbdc",
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }
// );
mongoose.connect("mongodb://localhost:27017/workouts", {
  useNewUrlParser: true,
  // useFindAndModify: false,
  useUnifiedTopology: true,
});

app.use(htmlController);
app.use(workoutController);
app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
