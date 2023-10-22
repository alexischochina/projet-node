const express = require('express');
const router = express.Router();
const userController = require('../controllers/UserController');
const auth = require('../functions/auth');

// Create a new User
router.post('/', userController.create);
router.get('/', userController.findAll);
//router.post('/login', userController.login);

module.exports = router;