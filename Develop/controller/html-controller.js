const path = require("path");
//const router = require("./workout-controller");
// const excerise = require("../public/exercise.html");
// router.get("/exercise", async (req, res) => {
//   res.sendFile(path.join(__dirname,' ../public'/exercise.html'))
// });

const express = require("express");
const router = express.Router();

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});
module.exports = router;
