const express = require('express');
const router = express.Router();
const pkmController = require('../controllers/PkmController');

// Create a new Pkm
router.post('/', pkmController.create);
router.get('/', pkmController.findAll);
router.get('/:id', pkmController.findOne);
router.patch('/:id', pkmController.update);
router.delete('/:id', pkmController.delete);

module.exports = router;