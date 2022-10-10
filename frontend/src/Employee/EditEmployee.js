import Modal from '../Modal/Modal';

const EditEmployee = (props) => {
  const editEmployee = async (event) => {
    event.preventDefault();
    const response = await fetch(
      process.env.REACT_APP_BACKEND_URL + 'employees/' + props.employee._id,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(props.employee),
      }
    );
    const data = await response.json();
    console.log(data);
    props.clicked();
  };
  return (
    <Modal show={props.show} header="Edit Employee" clicked={props.clicked}>
      <form className="row g-3 col-md-12" onSubmit={editEmployee}>
        <div className="col-md-6">
          <label htmlFor="firstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            defaultValue={props.employee.firstName}
            onChange={(event) =>
              props.setEmployee({
                ...props.employee,
                firstName: event.target.value,
              })
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
            defaultValue={props.employee.lastName}
            onChange={(event) =>
              props.setEmployee({
                ...props.employee,
                lastName: event.target.value,
              })
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
            defaultValue={props.employee.userName}
            onChange={(event) =>
              props.setEmployee({
                ...props.employee,
                userName: event.target.value,
              })
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
              defaultChecked={props.employee.active}
              onChange={(event) =>
                props.setEmployee({
                  ...props.employee,
                  active: event.target.checked,
                })
              }
            />
          </div>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-success">
            Save
          </button>
          <button className="btn btn-danger" onClick={props.clicked}>
            Cancel
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default EditEmployee;
