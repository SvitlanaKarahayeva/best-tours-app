var express = require('express');
var router = express.Router();
const tourCtrl = require('../controllers/tours')

/* show all tours */
router.get('/', tourCtrl.index)

/* show one tour - Details page*/
router.get('/:id', tourCtrl.showOne)

/*  */
/*  */


module.exports = router;
