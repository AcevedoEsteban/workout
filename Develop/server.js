const mongoose = require("mongoose");
const PORT = process.env.PORT || 8080;
mongoose.connect("mongodb://localhost/workouts", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
// mongoose.connect("mongodb://localhost/workouts", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });
