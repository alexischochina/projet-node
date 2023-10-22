const PKM = require('../models/Pkm');

// Create and Save a new Pkm
exports.create = (req, res) => {
    console.log(req.body);
    const postPkm = req.body;

    const pkm = new PKM({
        name: postPkm.name,
        type: postPkm.type,
        level: postPkm.level,
    });

    pkm.save()
        .then(data => {
            res.send(data);
        })
    .catch(err => {
       res.status(500).send({
              message: err.message
       });
    });
}

// Retrieve all Pkm from the database.
exports.findAll = (req, res) => {
    PKM.find()
        .then(pkms => {
            res.send(pkms);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// find a single pkm with an id
exports.findOne = (req, res) => {
    PKM.findById(req.params.id)
        .then(pkm => {
            if (!pkm) {
                return res.status(404).send({
                    message: "Pkm not found with id " + req.params.id
                });
            }
            res.send(pkm);
        })
}

// patch data in one pkm
exports.update = (req, res) => {
    const id = req.params.id;
    PKM.findByIdAndUpdate(id, req.body, {useFindAndModify: false})
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot update Pkm with id=${id}. Maybe Pkm was not found!`
                });
            } else res.send({message: "Pkm was updated successfully."});
        })
        .catch(err => {
            res.status(500).send({
                message: "Error updating Pkm with id=" + id
            });
        });
}

// delete one pkm
exports.delete = (req, res) => {
    const id = req.params.id;
    PKM.findByIdAndRemove(id)
        .then(data => {
            if (!data) {
                res.status(404).send({
                    message: `Cannot delete Pkm with id=${id}. Maybe Pkm was not found!`
                });
            } else {
                res.send({
                    message: "Pkm was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: "Could not delete Pkm with id=" + id
            });
        });
}