const express = require('express')
let router = express.Router()

const indexController = require('../controllers/indexController')

router.get('/', indexController.index)
router.get('/detalhe/:menuId/', indexController.detalhe);

module.exports = router;