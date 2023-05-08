// * Request handling Logic
const Contact = require('../../models/contact');

// * Create
async function createContact(req, res){
    try{
        const contactInfo = await Contact.create(req.body);
        console.log(contactInfo);
        res.json(contactInfo);
    } catch(error){
        console.log(error);
        res.status(400).json(error);
    }
};