const mongoose = require('mongoose');

const Schema = mongoose.Schema;

//! Schema for contact info form
const contactSchema = new Schema({
    Name:{type: String, required: true},
    EMail:{type: String, required: true},
    PhoneNum:{type:String, required: true}
});

const Contact = mongoose.model('Contact', contactSchema);
module.exports = Contact;