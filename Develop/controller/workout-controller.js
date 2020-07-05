const express = require("express");
const router = express.Router();
const db = require("../models");
const path = require("path");

router.get("/exercise", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/exercise.html"));
});
router.get("/stats", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/stats.html"));
});

router.get("/api/workouts", async (req, res) => {
  try {
    const data = await db.Workout.find();
    res.json(data);
  } catch (error) {
    console.log(error);
  }
});

router.get("/api/workouts/range", async (req, res) => {
  try {
    const data = await db.Workout.find({});
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.post("/api/workouts", async ({ body }, res) => {
  try {
    const data = await db.Workout.create(body);
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});

router.put("/api/workouts/:id", async (req, res) => {
  try {
    const data = await db.Workout.update(
      { _id: req.params.id },
      { $push: { excercises: req.body } },
      { new: true }
    );
    res.json(data);
  } catch (err) {
    console.log(err);
  }
});
module.exports = router;
