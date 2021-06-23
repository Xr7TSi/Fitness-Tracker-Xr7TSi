const router = require("express").Router();
const Workout = require("../models/Workout.js");

module.exports = router;

router.get("/api/workouts", function (req, res) {
  Workout.find()

    .then((data) => {
      const updatedData = data.map((workout) => {
        const totalDuration = workout.exercises.reduce(
          (acc, curr) => acc + curr.duration,
          0
        );
        return {
          _id: workout.id,
          day: workout.day,
          exercises: workout.exercises,
          totalDuration,
        };
      });
      // console.log(JSON.stringify(updatedData, null, 2))
      res.json(updatedData);
    })
    .catch((err) => {
      res.json(err);
    });
});

router.post("/api/workouts", function (req, res) {
  Workout.create({})
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
    });
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
  Workout.findByIdAndUpdate(
    params.id,
    { $push: { exercises: body } },
    { new: true, runValidators: true }
  )
    .then((data) => res.json(data))
    .catch((err) => {
      res.json(err);
      console.log(err);
    });
});

router.get("/api/workouts/range", function (req, res) {
  Workout.find()

    .then((data) => {
      const updatedData = data.map((workout) => {
        const totalDuration = workout.exercises.reduce(
          (acc, curr) => acc + curr.duration,
          0
        );
        return {
          day: workout.day,
          _id: workout._id,
          exercises: workout.exercises,
          totalDuration,
        };
      });
      // console.log(JSON.stringify(updatedData, null, 2))
      res.json(updatedData);
    })
    .catch((err) => {
      res.json(err);
    });
});
