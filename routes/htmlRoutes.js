const router = require("express").Router();
const path = require("path");
//Workout tracker home page
// ç
//Exercise page
router.get("/exercise", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/exercise.html"))
);
//Stats page
router.get("/stats", (req, res) =>
  res.sendFile(path.join(__dirname, "../public/stats.html"))
);
//export html routes
module.exports = router;