import { DataGrid } from "@mui/x-data-grid";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import SearchIcon from "@mui/icons-material/Search";

import React, { useState } from "react";

const columns = [
  { field: "id", headerName: "ID", width: 70 },
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
];

const rows = [
  { id: 1, lastName: "Snow", firstName: "Jon", age: 35 },
  { id: 2, lastName: "Lannister", firstName: "Cersei", age: 42 },
  { id: 3, lastName: "Lannister", firstName: "Jaime", age: 45 },
  { id: 4, lastName: "Stark", firstName: "Arya", age: 16 },
  { id: 5, lastName: "Targaryen", firstName: "Daenerys", age: null },
  { id: 6, lastName: "Melisandre", firstName: null, age: 150 },
  { id: 7, lastName: "Clifford", firstName: "Ferrara", age: 44 },
  { id: 8, lastName: "Frances", firstName: "Rossini", age: 36 },
  { id: 9, lastName: "Roxie", firstName: "Harvey", age: 65 },
  { id: 10, lastName: "Smith", firstName: "John", age: 30 },
  { id: 11, lastName: "Doe", firstName: "Jane", age: 28 },
  { id: 12, lastName: "Johnson", firstName: "Robert", age: 40 },
  { id: 13, lastName: "Williams", firstName: "Emily", age: 25 },
  { id: 14, lastName: "Brown", firstName: "Michael", age: 55 },
  { id: 15, lastName: "Jones", firstName: "Susan", age: 48 },
  { id: 16, lastName: "Davis", firstName: "David", age: 32 },
  { id: 17, lastName: "Miller", firstName: "Linda", age: 60 },
  { id: 18, lastName: "Wilson", firstName: "Thomas", age: 38 },
  { id: 19, lastName: "Moore", firstName: "Jennifer", age: 22 },
  { id: 20, lastName: "Lee", firstName: "Sarah", age: 29 },
  { id: 21, lastName: "Smith", firstName: "William", age: 50 },
  { id: 22, lastName: "Johnson", firstName: "Jessica", age: 33 },
  { id: 23, lastName: "Brown", firstName: "Chris", age: 27 },
  { id: 24, lastName: "Davis", firstName: "Mary", age: 45 },
  { id: 25, lastName: "Miller", firstName: "James", age: 58 },
  { id: 26, lastName: "Wilson", firstName: "Elizabeth", age: 42 },
  { id: 27, lastName: "Moore", firstName: "Daniel", age: 31 },
  { id: 28, lastName: "Lee", firstName: "Laura", age: 36 },
  { id: 29, lastName: "Smith", firstName: "John", age: 49 },
  { id: 30, lastName: "Johnson", firstName: "Anna", age: 24 },
  { id: 31, lastName: "Brown", firstName: "Matthew", age: 53 },
  { id: 32, lastName: "Davis", firstName: "Samantha", age: 30 },
  { id: 33, lastName: "Miller", firstName: "Daniel", age: 47 },
  { id: 34, lastName: "Wilson", firstName: "Olivia", age: 35 },
  { id: 35, lastName: "Moore", firstName: "Christopher", age: 29 },
  { id: 36, lastName: "Lee", firstName: "Sophia", age: 41 },
  { id: 37, lastName: "Smith", firstName: "Robert", age: 62 },
  { id: 38, lastName: "Johnson", firstName: "Emily", age: 26 },
  { id: 39, lastName: "Brown", firstName: "William", age: 51 },
  { id: 40, lastName: "Davis", firstName: "Jessica", age: 34 },
  { id: 41, lastName: "Miller", firstName: "David", age: 56 },
  { id: 42, lastName: "Wilson", firstName: "Jennifer", age: 39 },
  { id: 43, lastName: "Moore", firstName: "Andrew", age: 28 },
  { id: 44, lastName: "Lee", firstName: "Emma", age: 37 },
  { id: 45, lastName: "Smith", firstName: "Richard", age: 47 },
  { id: 46, lastName: "Johnson", firstName: "Megan", age: 23 },
  { id: 47, lastName: "Brown", firstName: "Joseph", age: 45 },
  { id: 48, lastName: "Davis", firstName: "Sophia", age: 29 },
  { id: 49, lastName: "Miller", firstName: "Alexander", age: 31 },
  { id: 50, lastName: "Wilson", firstName: "Ava", age: 38 }
];

export default function Clients() {

const [filterValue, setFilterValue] = useState("");
const handleFilterChange = (event) => {
  setFilterValue(event.target.value);
};

const filteredRows = rows.filter((row) => {
  const firstName = row.firstName || ""; 
  const lastName = row.lastName || ""; 
  
  return (
    firstName.toLowerCase().includes(filterValue.toLowerCase()) ||
    lastName.toLowerCase().includes(filterValue.toLowerCase())
  );
});

  return (
    <main id="main" class="main">
      <div style={{ width: "100%" }}>
        <TextField
          label="Search"
          variant="outlined"
          value={filterValue}
          onChange={handleFilterChange}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          style={{ marginBottom: "16px" }}
        />
        <DataGrid
          rows={filteredRows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 10 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
        />
      </div>
    </main>
  );
}
