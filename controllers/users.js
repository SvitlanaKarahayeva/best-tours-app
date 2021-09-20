const User = require('../models/user');
const Booking = require('../models/booking')

function index(req, res){
    res.render('users/index')
}

/* show all booked tours for a particular user */
async function showAll(req, res){
    const user = await User.find(req.user.id).populate('booking')
    console.log("THIS IS USER")
    // console.log(user)
    // res.render('users/showAll', { user })
}

module.exports = {
    index,
    showAll
}