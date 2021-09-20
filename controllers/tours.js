const Booking = require('../models/booking')
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
    newBooking.user = user

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
    console.log("DELETED")
    res.redirect('/tours')
}

/* show all booked tours for a particular user */

module.exports = {
    index: showAll,
    showCreateForm,
    createTour,
    showOne,
    createBooking,
    showUpdateForm,
    updateTour,
    deleteTour
}