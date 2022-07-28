const db = require('../models');
const Employe = db.employes;


//create and save a new Employe
exports.create = (req, res) => {
    //Valid request
    if (!req.body.nom) {
        res.status(400).send({message: `Content can not be empty! ${req.body.nom}`});
        return;
    }
    // create a Employe
    const employe = new Employe({
        nom: req.body.nom,
        prenom: req.body.prenom,
        email: req.body.email,
        adresse: req.body.adresse,
        telephone: req.body.telephone,
        grade: req.body.grade,
        specialite: req.body.specialite,
        salaire: req.body.salaire
    });

    // Save Employe in the database
    employe.save(employe)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                err.message || "Some error occurred while creating the Employe."
            });
        });
};

exports.findAll = (req, res) => {
    const nom = req.query.nom;
    var condition = nom ? { nom: { $regex: new RegExp(nom), $options: "i" } }
    : {};
    Employe.find(condition)
    .then(data => {
    res.send(data);
    })
    .catch(err => {
    res.status(500).send({
    message:
    err.message || "Some error occurred while retrieving Employes."
    });
    });
};

// Find a single Employe with an id
exports.findOne = (req, res) => {
    const id = req.params.id;
    Employe.findById(id)
    .then(data => {
    if (!data)
    res.status(404).send({ message: "Not found Employe with id " + id });
    else res.send(data);
    })
    .catch(err => {
    res
    .status(500)
    .send({ message: "Error retrieving Employe with id=" + id });
    });
};

// Update a Employe by the id in the request
exports.update = (req, res) => {
    if (!req.body) {
    return res.status(400).send({
    message: "Data to update can not be empty!"
    });
    }
    const id = req.params.id;
    Employe.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
    if (!data) {
    res.status(404).send({
    message: `Cannot update Employe with id=${id}. Maybe Employe was not
    found!`
    });
    } else res.send({ message: "Employe was updated successfully." });
    })
    .catch(err => {
    res.status(500).send({
    message: "Error updating Employe with id=" + id
    });

});
};
// Delete a Employe with the specified id in the request
exports.delete = (req, res) => {
    const id = req.params.id;
    Employe.findByIdAndRemove(id)
    .then(data => {
    if (!data) {
    res.status(404).send({
    message: `Cannot delete Employe with id=${id}. Maybe Employe was not
    found!`
    });
    } else {
    res.send({
    message: "Employe was deleted successfully!"
    });
    }
    })
    .catch(err => {
    res.status(500).send({
    message: "Could not delete Employe with id=" + id
    });
    });
};
// Create and Save a new Employe
// Retrieve all Employes from the database.

// Delete a Employe with the specified id in the request
exports.deleteAll = (req, res) => {
    Employe.deleteMany({})
    .then(data => {
        res.send({
            message: `${data.deletedCount} Employes were deleted successfully!`
        });
    })
    .catch(err => {
        res.status(500).send({
        message:
        err.message || "Some error occurred while removing all Employes."
        });
    });
};