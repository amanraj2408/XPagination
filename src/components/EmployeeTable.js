import React, { useState } from "react";

const ITEMS_PER_PAGE = 10;

function EmployeeTable({ employees }) {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(employees.length / ITEMS_PER_PAGE);

  const startIdx = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentEmployees = employees.slice(startIdx, startIdx + ITEMS_PER_PAGE);

  const handlePrevious = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  return (
    <>
      <table border="1" width="100%">
        <thead style={{ backgroundColor: "green", color: "white" }}>
          <tr>
            <th>ID</th><th>Name</th><th>Email</th><th>Role</th>
          </tr>
        </thead>
        <tbody>
          {currentEmployees.map((emp, index) => (
            <tr key={emp.id}>
              <td>{startIdx + index + 1}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>{emp.role}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div style={{ textAlign: "center", margin: "1rem" }}>
        <button onClick={handlePrevious} disabled={currentPage === 1}>Previous</button>
        <span style={{ margin: "0 1rem" }}>{currentPage}</span>
        <button onClick={handleNext} disabled={currentPage === totalPages}>Next</button>
      </div>
    </>
  );
}

export default EmployeeTable;
