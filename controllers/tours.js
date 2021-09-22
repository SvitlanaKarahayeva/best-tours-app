const Booking = require('../models/booking')
const tour = require('../models/tour')
const Tour = require('../models/tour')
const User = require('../models/user')

/* show all tours */
async function showAll(req, res){
    const tours = await Tour.find({})
    res.render('tours/index', { tours })
}

/* Create tours on a separate page - new.ejs */
function showCreateForm(req, res){
    res.render('tours/new')
}
async function createTour(req, res){
    const tour = new Tour({
        name: req.body.name,
        image: req.body.image,
        tourType: req.body.tourType,
        location: req.body.location,
        price: req.body.price,
        description: req.body.description
    })
    await tour.save()
    res.redirect('/tours')
}

/* Show one tour - Details page */
async function showOne(req, res){
    const id = req.params.id
    const tour = await Tour.findById(id)
    res.render('tours/show', { tour })
}

/* Book a particular tour  on the details page */
async function createBooking(req, res){
    const tour = await Tour.findById(req.params.id)
    const user = await User.findOne({ googleId: req.user.googleId }) 

    const newBooking = new Booking ({
        date: req.body.date,
        people: req.body.people,
        phoneNumber: req.body.phoneNumber
    })
    tour.booking.push(newBooking)
    user.booking.push(newBooking)
    newBooking.tour = tour
    newBooking.user = user
    user.tour.push(tour)

    await tour.save()
    await user.save()
    await newBooking.save()
    res.render('bookings/showOne', { tour, newBooking }) 
}

/* Update tour on a separate page */
async function showUpdateForm(req, res){
    const tour = await Tour.findById(req.params.id)
    res.render('tours/update', { tour })
}
async function updateTour(req, res){
    const id = req.params.id
    const tour = await Tour.findByIdAndUpdate(id, req.body)
    res.redirect(`/tours/${tour._id}`)
}

/* Delete tour - by Admin user only */
async function deleteTour(req, res){
    const tour = await Tour.findByIdAndDelete(req.params.id)
    res.redirect('/tours')
}

/* show  booking info for a particular user based on tour id - that is why in the tours controller*/
async function showTourBookingInfo(req, res){
    const tour = await Tour.findById(req.params.id).populate('booking')
    res.render('tours/bookingsInfo', { tour })
}

module.exports = {
    index: showAll,
    showCreateForm,
    createTour,
    showOne,
    createBooking,
    showUpdateForm,
    updateTour,
    deleteTour,
    showTourBookingInfo
}