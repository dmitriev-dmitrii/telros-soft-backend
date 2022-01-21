const mongoose = require('mongoose');
const Admin = new mongoose.Schema({

    name : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    }

})

module.exports = mongoose.model('Admin', Admin)