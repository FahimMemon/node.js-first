const express = require('express')
const router = express.Router()

router.use('/users', require('./users'))
// router.use('/scores', require('./scores'))


module.exports = router