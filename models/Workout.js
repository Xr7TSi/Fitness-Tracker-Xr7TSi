const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
  type: {
    type: String,
    trim: true,
    required: "Cardio or Resistance exercise type is Required"
  },
  name: {
    type: String,
    trim: true,
    required: "Exercise type is Required"
  },
  distance: {
    type: Number,
    required: true
  },
  duration: {
    type: Number,
    required: true
  },
  weight: {
    type: Number,
    trim: true,
  },
  sets: {
    type: Number,
    trim: true,
  },
  reps: {
    type: Number,
    trim: true,
  },
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;