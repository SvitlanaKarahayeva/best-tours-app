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
        default: function(){
            let day = new Date();
            day.setFullYear(d.getFullYear() + 1);
            return day
        },
        required: true
    },
    phoneNumber: {
        type: Number
    },
    user: {
            type: Schema.Types.ObjectId, 
            ref: 'User'
    },
    tour: {
        type: Schema.Types.ObjectId, 
        ref: 'Tour'
    }

})

module.exports = mongoose.model('Booking', bookingSchema)