const mongoose = require('mongoose');
const Booking = require('../models/booking')
const Schema = mongoose.Schema

const tourSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String
    },
    tourType: {
        type: String,
        enum: ['Aqua Advantures', 'Historical places', 'Food Tasting', 'Fun activities']
    },
    location: {
        type: String
    },
    price: {
        type: Number,
        min: 0
    },
    description: {
        type: String
    },
    booking: [{
        type: Schema.Types.ObjectId, 
        ref: 'Booking'
    }]

})
//middleware that would delete associated bookings along with deleted tour
tourSchema.post('findOneAndDelete', async function(tour){
    if(tour.booking.length){
        const deletedData = await Booking.deleteMany({_id: { $in: tour.booking}})
        console.log(deletedData)
    }
})

module.exports = mongoose.model('Tour', tourSchema)


