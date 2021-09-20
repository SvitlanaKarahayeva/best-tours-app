var express = require('express');
var router = express.Router();
const usersCtrl = require('../controllers/users')

/* login with google page, the message is displayed in navbar.ejs */
router.get('/', usersCtrl.index)

/* show all bookings for a user with user id*/
router.get('/:id/tours', usersCtrl.showAll)

module.exports = router;