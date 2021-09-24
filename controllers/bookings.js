const Booking = require('../models/booking')
const Tour = require('../models/tour')
const User = require('../models/user')

async function index(req, res){

    const tours = await Tour.find({}).populate('booking').populate('user')
    
    console.log(tours)
    res.render('bookings/index', {tours})
}

module.exports = {
    index
}