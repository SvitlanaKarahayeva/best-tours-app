const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: String,
    email: String,
    googleId: String,
    booking: {
        type: Schema.Types.ObjectId, 
        ref: 'Booking'}
})

module.exports = mongoose.model('User', userSchema)