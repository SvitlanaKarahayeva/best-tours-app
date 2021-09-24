var express = require('express');
const tours = require('../controllers/tours');
var router = express.Router();
const toursCtrl = require('../controllers/tours')

/* Show all tours */
router.get('/', toursCtrl.index)

/* create new tour - by admin user only */
router.get('/new', toursCtrl.showCreateForm)
router.post('/new/create', toursCtrl.createTour)

/* Show one tour - Details page*/
router.get('/:id', toursCtrl.showOne)

/* Create booking for a particular tour, form is on a tour's details page */
router.post('/booking/:id', toursCtrl.createBooking)

/* Update tour - update page- by Admin user only*/
router.get('/:id/update', toursCtrl.showUpdateForm)
router.put('/update/:id', toursCtrl.updateTour)

/* Delete tour - by Admin user only */
router.delete('/:id', toursCtrl.deleteTour)

/* Show the details of the booking for a particular tour*/
router.get('/:id/bookings', toursCtrl.showTourBookingInfo)

 
module.exports = router;
