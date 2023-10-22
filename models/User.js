const mongoose = require('mongoose');
const uniqueValidator = require('mongoose-unique-validator');
const UserSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
})


const bcrypt = require('bcryptjs');
const salt = bcrypt.genSaltSync(10);
UserSchema.pre('save', function (next) {
    this.password = bcrypt.hashSync(this.password, salt);
    next();
})


UserSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', UserSchema);