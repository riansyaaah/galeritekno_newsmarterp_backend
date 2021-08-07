const express = require('express');
const route = express.Router();

const masterClientsController = require('../controllers/MasterClientsController');
const masterBranchesController = require('../controllers/MasterBranchesController');
const masterDoctorsController = require('../controllers/MasterDoctorsController');
const masterPatientsController = require('../controllers/MasterPatientsController');
const masterPolisController = require('../controllers/MasterPolisController');
const masterServicesController = require('../controllers/MasterServicesController');
const masterDoctorsScheduleController = require('../controllers/MasterDoctorsScheduleController');
const dummyController = require('../controllers/DummyController');

/* MasterClients*/
route.get('/api/masterclients/getAll', masterClientsController.getAll)
route.get('/api/masterclients/getByPk/:id', masterClientsController.getByPk)
route.get('/api/masterclients/getByUrl/:url', masterClientsController.getByUrl)
route.get('/api/masterclients/getByStatus/:status', masterClientsController.getByStatus)
route.post('/api/masterclients/post', masterClientsController.create)
route.put('/api/masterclients/update/:id', masterClientsController.update);
route.delete('/api/masterclients/delete/:id', masterClientsController.delete);
// route.get('/api/masterclients/getMultipleValues/:val1/:val2/:val3/:val4', masterClientsController.getMultipleValues)
// route.get('/api/masterclients/getQueryString', masterClientsController.getQueryString)
/*---------------*/

/*MasterCabangs*/
route.get('/api/masterBranches/getAll', masterBranchesController.getAll)
route.get('/api/masterBranches/getByPk/:id', masterBranchesController.getByPk)
route.get('/api/masterBranches/getByClient/:id', masterBranchesController.getByClient)
route.get('/api/masterBranches/getByStatus/:status', masterBranchesController.getByStatus)
route.post('/api/masterBranches/post', masterBranchesController.create)
route.put('/api/masterBranches/update/:id', masterBranchesController.update);
route.delete('/api/masterBranches/delete/:id', masterBranchesController.delete);
/*---------------*/

/*MasterDoctors*/
route.get('/api/masterDoctors/getAll', masterDoctorsController.getAll)
route.get('/api/masterDoctors/getByPk/:id', masterDoctorsController.getByPk)
route.get('/api/masterDoctors/getByStatus/:status', masterDoctorsController.getByStatus)
route.post('/api/masterDoctors/post', masterDoctorsController.create)
route.put('/api/masterDoctors/update/:id', masterDoctorsController.update);
route.delete('/api/masterDoctors/delete/:id', masterDoctorsController.delete);
/*---------------*/

/*MasterPatients*/
route.get('/api/masterPatients/getAll', masterPatientsController.getAll)
route.get('/api/masterPatients/getByPk/:id', masterPatientsController.getByPk)
route.get('/api/masterPatients/getByStatus/:status', masterPatientsController.getByStatus)
route.post('/api/masterPatients/post', masterPatientsController.create)
route.put('/api/masterPatients/update/:id', masterPatientsController.update);
route.delete('/api/masterPatients/delete/:id', masterPatientsController.delete);
/*---------------*/

/*MasterPolis*/
route.get('/api/masterPolis/getAll', masterPolisController.getAll)
route.get('/api/masterPolis/getByPk/:id', masterPolisController.getByPk)
route.get('/api/masterPolis/getByStatus/:status', masterPolisController.getByStatus)
route.post('/api/masterPolis/post', masterPolisController.create)
route.put('/api/masterPolis/update/:id', masterPolisController.update);
route.delete('/api/masterPolis/delete/:id', masterPolisController.delete);
/*---------------*/

/*MasterServices*/
route.get('/api/masterServices/getAll', masterServicesController.getAll)
route.get('/api/masterServices/getByPk/:id', masterServicesController.getByPk)
route.get('/api/masterServices/getByStatus/:status', masterServicesController.getByStatus)
route.post('/api/masterServices/post', masterServicesController.create)
route.put('/api/masterServices/update/:id', masterServicesController.update);
route.delete('/api/masterServices/delete/:id', masterServicesController.delete);
/*---------------*/

/*MasterDoctorsSchedule*/
route.get('/api/masterDoctorsSchedule/getAll', masterDoctorsScheduleController.getAll)
route.get('/api/masterDoctorsSchedule/getByPk/:id', masterDoctorsScheduleController.getByPk)
route.get('/api/masterDoctorsSchedule/getByStatus/:status', masterDoctorsScheduleController.getByStatus)
route.post('/api/masterDoctorsSchedule/post', masterDoctorsScheduleController.create)
route.put('/api/masterDoctorsSchedule/update/:id', masterDoctorsScheduleController.update);
route.delete('/api/masterDoctorsSchedule/delete/:id', masterDoctorsScheduleController.delete);
/*---------------*/

route.get('/api/Dummy/getAll', dummyController.getAll)
route.post('/api/Dummy/post', dummyController.create)
route.put('/api/Dummy/update/:id', dummyController.update);
route.delete('/api/Dummy/delete/:id', dummyController.delete);

module.exports = route;