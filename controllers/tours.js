const Tour = require('../models/tour')

/* show all tours */
async function showAll(req, res){
    const tours = await Tour.find({})
    res.render('tours/index', {tours})
}

/* show one tour - Details page */
async function showOne(req, res){
    const id = req.params.id
    const tour = await Tour.findById(id)
    res.render('tours/show', {tour})
}

/*  */
/*  */
/*  */

module.exports = {
    index: showAll,
    showOne
}