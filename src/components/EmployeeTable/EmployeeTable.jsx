import { useAtom } from "jotai";
import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { employeesAtom } from "../../atoms";
import { formaterDateFR } from "../../utils";
import "./EmployeeTable.css";

const EmployeeTable = () => {
  const [employees] = useAtom(employeesAtom);
  const [search, setSearch] = useState("");
  const [filteredEmployees, setFilteredEmployees] = useState(employees);

  useEffect(() => {
    setFilteredEmployees(employees);
  }, [employees]);

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

  const handleSearch = (event) => {
    const value = event.target.value;
    setSearch(value);

    const filteredData = employees.filter((employee) =>
      Object.values(employee)
        .join(" ")
        .toLowerCase()
        .includes(value.toLowerCase())
    );

    setFilteredEmployees(filteredData);
  };

  return (
    <div>
      <DataTable
        title="Employee List"
        columns={columns}
        data={filteredEmployees}
        pagination
        noDataComponent="No employees available"
        subHeader
        subHeaderComponent={
          <div className="search-container">
            <input
              type="text"
              placeholder="Search..."
              value={search}
              onChange={handleSearch}
              className="search-input"
            />
          </div>
        }
      />
    </div>
  );
};

export default EmployeeTable;
