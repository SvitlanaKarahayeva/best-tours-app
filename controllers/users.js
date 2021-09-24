const User = require('../models/user');
const Booking = require('../models/booking')
const Tour = require('../models/tour')
// passed
function index(req, res){
    res.render('users/index')
}
// not passed
/* show a particular user tours booked */
async function showAll(req, res){
        const user = await User.findById(req.params.id).populate("tour")
        res.render('users/showAll', {user})
}


module.exports = {
    index,
    showAll
}