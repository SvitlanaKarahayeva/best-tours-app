const User = require('../models/user');
const Booking = require('../models/booking')
const Tour = require('../models/tour')

function index(req, res){
    res.render('users/index')
}

/* show a particular user tours booked */
async function showAll(req, res){
    // const user = await User.findById(req.params.id).populate('tour').populate('booking')
    // // user.populate('tour').populate('tour.booking');
    // // const tours = await Tour.find({}).populate('booking')
    // // const bookings = await Booking.find({})
   
    // console.log(user.tour)
    // // res.render('users/showAll', { user })
    // res.render('users/showAll', {user})
    // const tours =  await Tour.find({}).populate('booking')
    // console.log(tours)
    // User.findById(req.params.id).populate('booking').exec(function(err, user) {
    //     // list of cars with partIds populated
    //     // Try an populate nested
    //     Booking.populate(user, {path: 'booking.tour'}, function(err, user) {
    //       console.log(user)
    //       console.log("USer.tour!!!!!!")
    //       console.log(user.tour.booking)
    //     });
    //   });

    //   const user = await User.findById(req.params.id).populate("booking").populate("booking.tour")
    //   console.log(user.booking)
    //   console.log("UTB")
    //   console.log(user.booking.tour)
    //   res.send(user.booking)
        //   User.findById(req.params.id).populate('booking').exec(function(err, user) {
        // // list of cars with partIds populated
        // // Try an populate nested
        // Booking.populate(user, {path: 'booking.tour'}, function(err, user) {
        //   console.log(user)
        //   console.log("USer.tour!!!!!!")
        //   console.log(user.tour.booking)
        // });
        const user = await User.findById(req.params.id).populate("tour")
        res.render('users/showAll', {user})
}


module.exports = {
    index,
    showAll
}