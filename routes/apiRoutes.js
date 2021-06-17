const router = require("express").Router();
const Workout = require("../models/Workout.js");
const express = require("express");


module.exports = router;

router.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

router.get("/api/workouts", (req, res) => {
  //Use our Workout model to find all workouts
  //Then use res.json to send all the data from our database to the client
});