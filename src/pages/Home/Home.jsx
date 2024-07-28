import { useEffect, useState } from "react";
import Modal from "react-modal-plugin-ad";
import { Link } from "react-router-dom";
import { states } from "../../data/states";
import "./Home.css";

const Home = () => {
  const [stateOptions, setStateOptions] = useState([]);
  const [department, setDepartment] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [startDate, setStartDate] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    const options = states.map((state) => ({
      value: state.abbreviation,
      label: state.name,
    }));
    setStateOptions(options);
  }, []);

  const saveEmployee = () => {
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const street = document.getElementById("street").value;
    const city = document.getElementById("city").value;
    const state = document.getElementById("state").value;
    const zipCode = document.getElementById("zip-code").value;

    const employees = JSON.parse(localStorage.getItem("employees")) || [];
    const employee = {
      firstName,
      lastName,
      dateOfBirth,
      startDate,
      department,
      street,
      city,
      state,
      zipCode,
    };
    employees.push(employee);
    localStorage.setItem("employees", JSON.stringify(employees));
    setIsModalOpen(true);
  };

  return (
    <div>
      <div className="title">
        <h1>HRnet</h1>
      </div>
      <div className="container">
        <Link to="/employee-list">View Current Employees</Link>
        <h2>Create Employee</h2>
        <form id="create-employee">
          <label htmlFor="first-name">First Name</label>
          <input type="text" id="first-name" />

          <label htmlFor="last-name">Last Name</label>
          <input type="text" id="last-name" />

          <label htmlFor="date-of-birth">Date of Birth</label>
          <input
            id="date-of-birth"
            type="date"
            value={dateOfBirth}
            onChange={(e) => setDateOfBirth(e.target.value)}
          />

          <label htmlFor="start-date">Start Date</label>
          <input
            id="start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
          />

          <fieldset className="address">
            <legend>Address</legend>

            <label htmlFor="street">Street</label>
            <input id="street" type="text" />

            <label htmlFor="city">City</label>
            <input id="city" type="text" />

            <label htmlFor="state">State</label>
            <select id="state" name="state">
              {stateOptions.map((option) => (
                <option key={option.value} value={option.value}>
                  {option.label}
                </option>
              ))}
            </select>

            <label htmlFor="zip-code">Zip Code</label>
            <input id="zip-code" type="number" />
          </fieldset>

          <label htmlFor="department">Department</label>
          <select
            id="department"
            name="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          >
            <option value="">Select department</option>
            <option value="Sales">Sales</option>
            <option value="Marketing">Marketing</option>
            <option value="Engineering">Engineering</option>
            <option value="Human Resources">Human Resources</option>
            <option value="Legal">Legal</option>
          </select>
        </form>

        <button onClick={saveEmployee}>Save</button>
      </div>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <div>Employee Created!</div>
      </Modal>
    </div>
  );
};

export default Home;
