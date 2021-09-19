const Booking = require('../models/booking')
const Tour = require('../models/tour')
const User = require('../models/user')

/* show all tours */
async function showAll(req, res){
        const tours = await Tour.find({})
      
        res.render('tours/index', { tours })
}

/* show one tour - Details page */
async function showOne(req, res){
        const id = req.params.id
        const tour = await Tour.findById(id)
        res.render('tours/show', {tour})
}

/* book a particular tour */
async function createBooking(req, res){
    const tour = await Tour.findById(req.params.id)
    const user = await User.findOne({ googleId: req.user.googleId}) 

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

    res.render('bookings/showOne', {tour, newBooking}) 
}

/*  */
/*  */

module.exports = {
    index: showAll,
    showOne,
    createBooking
}