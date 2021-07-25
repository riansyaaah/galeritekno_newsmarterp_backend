const express = require('express');
const route = express.Router();
const masterClientsController = require('../controllers/MasterClientsController');

route.get('/api/masterclients/getAll', masterClientsController.getAll)
route.post('/api/masterclients/post', masterClientsController.create)
route.put('/api/masterclients/update/:id', masterClientsController.update);

module.exports = route;