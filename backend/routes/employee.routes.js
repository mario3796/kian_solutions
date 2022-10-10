const express = require('express');
const employeeController = require('../controllers/employee.controller');

const router = express.Router();

router.get('/', employeeController.getEmployees);

router.get('/:id', employeeController.getEmployee);

router.post('/', employeeController.addEmployee);

router.put('/:id', employeeController.editEmployee);

router.delete('/:id', employeeController.deleteEmployee);

module.exports = router;
