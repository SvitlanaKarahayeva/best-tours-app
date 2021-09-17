const User = require('../models/user');

function index(req, res){
    res.render('users/index')
}

module.exports = {
    index
}