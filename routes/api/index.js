const router = require('express').Router();
const api = require('./apiRoutes');

router.use('/api', api);

module.exports = router;