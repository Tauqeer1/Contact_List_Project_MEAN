/**
 * Created by Tauqeer Ahmed on 3/10/2016.
 */

var mongoose = require('mongoose');

var contactSchema = mongoose.Schema({
    name : String,
    email : String,
    number : Number
});

module.exports = mongoose.model('Contact',contactSchema);
