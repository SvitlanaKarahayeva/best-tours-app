const Tour = require('../models/tour')

/* show all tours */
async function showAll(req, res){
    const tours = await Tour.find({})
    res.render('tours/index', {tours})
    

}
/*  */
/*  */
/*  */
/*  */

module.exports = {
    index: showAll
}