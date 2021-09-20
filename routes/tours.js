var express = require('express');
var router = express.Router();
const toursCtrl = require('../controllers/tours')

/* Show all tours */
router.get('/', toursCtrl.index)

/* create new tour - by admin user only */
router.get('/new', toursCtrl.showCreateForm)
router.post('/', toursCtrl.createTour)

/* Show one tour - Details page*/
router.get('/:id', toursCtrl.showOne)

/* Create booking for a particular tour, form is on a tour's details page */
router.post('/:id', toursCtrl.createBooking)

/* Update tour - update page- by Admin user only*/
router.get('/:id/update', toursCtrl.showUpdateForm)
router.put('/:id', toursCtrl.updateTour)

/* Delete tour - by Admin user only */
router.delete('/:id', toursCtrl.deleteTour)
 
module.exports = router;
