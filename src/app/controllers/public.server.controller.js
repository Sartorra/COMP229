const express = require('express');

const router = express.Router();

router.use(express.static(`${process.cwd()}/src/public`));


module.exports = router;