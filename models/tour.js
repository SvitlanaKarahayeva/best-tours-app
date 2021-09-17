const mongoose = require('mongoose');

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
        enum: ['Aqua Advantures', 'Historical places', 'Food Tasting', "Fun activities"]
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
    booking: {
        type: Schema.Types.ObjectId, 
        ref: 'Booking'}

})

module.exports = mongoose.model('Tour', tourSchema)


