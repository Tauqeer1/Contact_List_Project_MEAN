/**
 * Created by Tauqeer Ahmed on 3/10/2016.
 */

var Contact = require('./models/contact.js');

function getContacts(res) {
    Contact.find(function (err, contacts) {
        if (err) {
            res.send(err);
        }
        res.json(contacts);
    });
};
module.exports = function (app) {

    app.get('/contactlist', function (req, res) {
        getContacts(res);
    });
    app.post('/contactList', function (req, res) {

        var newContact = new Contact({
            name: req.body.name,
            email: req.body.email,
            number: req.body.number
        });
        newContact.save(function (err) {
            if (!err) {
                getContacts(res);
            }

        });
    });
    app.delete('/contactlist/:id', function (req, res) {
        var id = req.params.id;
        Contact.remove({_id: id}, function (err) {
            if (!err) {
                getContacts(res);
            }
        });
    });

    app.get('/contactlist/:id', function (req, res) {
        var id = req.params.id;
        Contact.findOne({_id: id}, function (err, contact) {
            if (err) {
                res.send(err);
            }
            res.json(contact);
        });
    });
    app.put('/contactlist/:id', function (req, res) {
        var id = req.params.id;
        Contact.findOne({_id: id}, function (err, contact) {
            if (err) {
                res.send(err);
            }
            else {
                if(req.body.name){
                    contact.name = req.body.name;
                }
                if(req.body.email){
                    contact.email = req.body.email;
                }
                if(req.body.number){
                    contact.number = req.body.number;
                }
                contact.save(function(err,updatedContact){
                    if(err){
                        res.send(err);
                    }
                    res.json(updatedContact);
                })
            }
        });
    });

};