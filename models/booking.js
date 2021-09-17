const mongoose = require('mongoose');

const Schema = mongoose.Schema

const bookingSchema = new Schema({
    people: {
        type: Number,
        min: 0,
        required: true
    },
    date: {
        type: Date,
        default: Date.now(),
        required: true
    },
    tourType: {
        type: String,
        enum: ['Aqua Advantures', 'Historical places', 'Food Tasting', "Fun activities"]
    },
    location: {
        type: String
    },
    user: {
            type: Schema.Types.ObjectId, 
            ref: 'User'
    }
})

module.exports = mongoose.model('Booking', bookingSchema)