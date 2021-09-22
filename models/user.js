const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    firstName: String,
    email: String,
    googleId: String,
    booking: [{
        type: Schema.Types.ObjectId, 
        ref: 'Booking'
    }],
    tour: [{
        type: Schema.Types.ObjectId, 
        ref: 'Tour'
    }]
})

module.exports = mongoose.model('User', userSchema)