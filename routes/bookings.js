var express = require('express');
var router = express.Router();
const bookingsCtrl = require('../controllers/bookings')

/* show all booked tours for admin user only*/
router.get('/', bookingsCtrl.index)

/*  */


module.exports = router;