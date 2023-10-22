const USER = require('../models/User');

// Create and Save a new User
exports.create = (req, res) => {
    console.log(req.body);
    const postUser = req.body;

    const user = new USER({
        name: postUser.name,
        email: postUser.email,
        password: postUser.password,
    });

    user.save()
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            console.log(err.message);
            res.status(500).send({
                message: err.message
            });
        })
}

// Retrieve all User from the database.
exports.findAll = (req, res) => {
    USER.find()
        .then(users => {
            res.send(users);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message
            });
        });
}

// delete a single user with an id
exports.delete = (req, res) => {
    USER.findByIdAndRemove(req.params.id)
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with id " + req.params.id
                });
            }
            res.send({message: "User deleted successfully!"});
        })
}

// create token with jwt
const key = "AYNx600ERto5kcLw"

const jwt = require('jsonwebtoken');
exports.login = (req, res) => {
    const {email, password} = req.body;
    USER.findOne({email: email})
        .then(user => {
            if (!user) {
                return res.status(404).send({
                    message: "User not found with email " + email
                });
            }
            if (password !== user.password) {
                return res.status(404).send({
                    message: "Wrong password"
                });
            }
            const token = jwt.sign({email: email}, key);
            res.send({token: token});
        })
}