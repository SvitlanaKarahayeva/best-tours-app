var express = require('express');
var router = express.Router();
const tourCtrl = require('../controllers/tours')

/* show all tours */
router.get('/', tourCtrl.index)

/*  */
/*  */
/*  */


module.exports = router;