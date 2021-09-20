const Booking = require('../models/booking')
const Tour = require('../models/tour')
const User = require('../models/user')

async function index(req, res){
    const tours = await Tour.find({}).populate('booking')
    const bookings = await Booking.find({}).populate('tour')
    const users = await User.find({})
    console.log(bookings)
    console.log(tours)
    

    res.render('bookings/index', {tours, bookings, users})
}

module.exports = {
    index
}