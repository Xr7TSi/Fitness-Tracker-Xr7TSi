const router = require('express').Router();
const workout = require('./workoutRoutes');

router.use('/workout', workout);

module.exports = router;