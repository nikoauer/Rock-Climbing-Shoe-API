const router = require('express').Router();
const shoeRoutes = require('./shoeRoutes');

router.use('/shoe', shoeRoutes);

module.exports = router;