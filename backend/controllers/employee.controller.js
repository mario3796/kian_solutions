const Employee = require('../models/employee.model');

exports.getEmployees = (req, res, _next) => {
  Employee.find()
    .then((employees) =>
      res.status(200).json({ message: 'employees fetched', employees })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
};

exports.getEmployee = (req, res, _next) => {
  Employee.findById(req.params.id)
    .then((employee) =>
      res.status(200).json({ message: 'employee fetched', employee })
    )
    .catch((err) => res.status(400).json({ message: err.message }));
};

exports.addEmployee = (req, res, _next) => {
  const { firstName, lastName, userName, active } = req.body;
  const employee = new Employee({
    firstName,
    lastName,
    userName,
    active,
  });
  employee
    .save()
    .then((employee) =>
      res.status(201).json({ message: 'employee added', employee })
    )
    .catch((err) => res.status(404).json({ message: err.message }));
};

exports.editEmployee = (req, res, _next) => {
  const { firstName, lastName, userName, active } = req.body;
  Employee.findById(req.params.id)
    .then((employee) => {
      employee.firstName = firstName;
      employee.lastName = lastName;
      employee.userName = userName;
      employee.active = active;
      return employee.save();
    })
    .then((employee) =>
      res.status(200).json({ message: 'employee updated', employee })
    )
    .catch((err) => res.status(404).json({ message: err.message }));
};

exports.deleteEmployee = (req, res, _next) => {
  Employee.findById(req.params.id)
    .then((employee) => employee.remove())
    .then(() => res.status(200).json({ message: 'employee deleted' }))
    .catch((err) => res.status(400).json({ message: err.message }));
};
