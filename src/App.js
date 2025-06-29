import React, { useEffect, useState } from "react";
import EmployeeTable from "./components/EmployeeTable";

const API_URL = "https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json";

function App() {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then(setEmployees)
      .catch(() => {
        setError(true);
        alert("failed to fetch data");
      });
  }, []);

  return (
    <div className="App">
      <h1 style={{ textAlign: "center" }}>Employee Data Table</h1>
      {employees.length > 0 && !error && <EmployeeTable employees={employees} />}
    </div>
  );
}

export default App;
