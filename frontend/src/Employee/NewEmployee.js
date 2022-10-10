import { useState } from 'react';

const NewEmployee = (props) => {
  const [employee, setEmployee] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    active: false,
  });

  const addEmployee = async (event) => {
    event.preventDefault();
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + 'employees',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(employee),
      }
    );
    const data = await response.json();
    console.log(data);
    setEmployee({
      firstName: '',
      lastName: '',
      userName: '',
      active: false,
    });
    props.cancel();
  };

  return (
    <form
      onSubmit={addEmployee}
      className="row g-3 col-md-8"
      style={{
        margin: 'auto',
        border: '1px solid #777',
        padding: '10px',
        borderRadius: '20px',
      }}
    >
      <div className="col-md-6">
        <label htmlFor="firstName" className="form-label">
          First Name
        </label>
        <input
          type="text"
          className="form-control"
          id="firstName"
          onChange={(event) =>
            setEmployee({ ...employee, firstName: event.target.value })
          }
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="lastName" className="form-label">
          Last Name
        </label>
        <input
          type="text"
          className="form-control"
          id="lastName"
          onChange={(event) =>
            setEmployee({ ...employee, lastName: event.target.value })
          }
        />
      </div>
      <div className="col-md-12">
        <label htmlFor="userName" className="form-label">
          Username
        </label>
        <input
          type="text"
          className="form-control"
          id="userName"
          onChange={(event) =>
            setEmployee({ ...employee, userName: event.target.value })
          }
        />
      </div>
      <div className="col-auto">
        <div className="form-check">
          <label htmlFor="active" className="form-check-label">
            Active
          </label>
          <input
            type="checkbox"
            className="form-check-input"
            id="active"
            onChange={(event) =>
              setEmployee({ ...employee, active: event.target.checked })
            }
          />
        </div>
      </div>
      <div className="col-12">
        <button type="submit" className="btn btn-success">
          Add Employee
        </button>
        <button className="btn btn-danger" onClick={props.cancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default NewEmployee;
