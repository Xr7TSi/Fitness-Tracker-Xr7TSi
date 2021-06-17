const router = require("express").Router();
const Workout = require("../models/Workout.js");
const express = require("express");
const app = express();

module.exports = router;

app.post("/workouts", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});