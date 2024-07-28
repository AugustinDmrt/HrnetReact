import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { formaterDateFR } from "../../utils";

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem("employees")) || [];
    setEmployees(storedEmployees);
  }, []);

  const columns = [
    { name: "First Name", selector: (row) => row.firstName, sortable: true },
    { name: "Last Name", selector: (row) => row.lastName, sortable: true },
    {
      name: "Start Date",
      selector: (row) => formaterDateFR(row.startDate),
      sortable: true,
    },
    { name: "Department", selector: (row) => row.department, sortable: true },
    {
      name: "Date of Birth",
      selector: (row) => formaterDateFR(row.dateOfBirth),
      sortable: true,
    },
    { name: "Street", selector: (row) => row.street, sortable: true },
    { name: "City", selector: (row) => row.city, sortable: true },
    { name: "State", selector: (row) => row.state, sortable: true },
    { name: "Zip Code", selector: (row) => row.zipCode, sortable: true },
  ];

  return (
    <DataTable
      title="Employee List"
      columns={columns}
      data={employees}
      pagination
      noDataComponent="No employees available"
    />
  );
};

export default EmployeeTable;
