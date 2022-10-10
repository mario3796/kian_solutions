import { useEffect, useState, Fragment } from 'react';
import Modal from '../Modal/Modal';
import EditEmployee from './EditEmployee';
import NewEmployee from './NewEmployee';

const EmployeeList = (props) => {
  let [employees, setEmployees] = useState([]);
  const [employee, setEmployee] = useState(null);
  const [handleEmployee, setHandleEmployee] = useState({
    add: false,
    edit: false,
    delete: null,
  });

  useEffect(() => {
    getEmployees();
  }, []);

  const getEmployees = async () => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + 'employees'
    );
    const data = await response.json();
    console.log(data);
    setEmployees(data.employees);
  };

  const deleteEmployee = async (employeeId) => {
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + 'employees/' + employeeId,
      {
        method: 'DELETE',
      }
    );
    const data = await response.json();
    console.log(data);
    setHandleEmployee({ ...handleEmployee, delete: null });
  };

  employees = employees.map((employee) => (
    <tr key={employee._id}>
      <th scope="row">{employee._id}</th>
      <td>{employee.firstName}</td>
      <td>{employee.lastName}</td>
      <td>{employee.userName}</td>
      <td>
        <input
          className="form-check-input"
          type="checkbox"
          checked={employee.active}
          disabled
        />
      </td>
      <td>
        <button
          className="btn btn-primary"
          onClick={() => {
            setEmployee(employee);
            setHandleEmployee({ ...handleEmployee, edit: true });
          }}
        >
          Edit
        </button>
        <button
          className="btn btn-danger"
          onClick={() =>
            setHandleEmployee({ ...handleEmployee, delete: employee._id })
          }
        >
          Delete
        </button>
      </td>
    </tr>
  ));

  return (
    <Fragment>
      {handleEmployee.edit && (
        <EditEmployee
          show
          employee={employee}
          clicked={() => setHandleEmployee({ ...handleEmployee, edit: false })}
          setEmployee={setEmployee}
        />
      )}
      {!handleEmployee.add && (
        <button
          className="btn btn-success"
          onClick={() => setHandleEmployee({ ...handleEmployee, add: true })}
        >
          Add Employee
        </button>
      )}
      <button className="btn btn-primary" onClick={() => getEmployees()}>
        Reload
      </button>
      {handleEmployee.add && (
        <NewEmployee
          cancel={() => setHandleEmployee({ ...handleEmployee, add: false })}
        />
      )}
      {handleEmployee.delete && (
        <Modal show>
          <h3>Are you sure you want to delete this row ?</h3>
          <button
            className="btn btn-danger"
            onClick={deleteEmployee.bind(this, handleEmployee.delete)}
          >
            Delete
          </button>
          <button
            className="btn btn-secondary"
            onClick={() =>
              setHandleEmployee({ ...handleEmployee, delete: null })
            }
          >
            Cancel
          </button>
        </Modal>
      )}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Username</th>
            <th scope="col">Active</th>
            <th scope="col">Actions</th>
          </tr>
        </thead>
        <tbody>{employees}</tbody>
      </table>
    </Fragment>
  );
};

export default EmployeeList;
