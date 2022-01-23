
module.exports ={

    name : {
        type: String,
        unique: true,
        required: true
    },
    password : {
        type: String,
        required: true
    }
}
// Step 3 - this is the code for ./models.js
var mongoose = require( 'mongoose' );
var imageSchema = new mongoose.Schema({

});
//Image is a model which has a schema imageSchema
module.exports = new mongoose.model( 'Image' , imageSchema);