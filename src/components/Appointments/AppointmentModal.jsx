import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";

import React, { useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button } from "@mui/material";

const handleEdit = (id) => {
  // Add logic to handle edit action here
};

const handleDelete = (id) => {
  // Add logic to handle delete action here
};

const style = {
  position: "absolute",
  overflow: "hidden",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "auto",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
};

const mobileStyle = {
  width: "90vw",
};

const finalStyle =
  window.innerWidth <= 768 ? { ...style, ...mobileStyle } : style;

function formatDate(dateString) {
  const options = { year: "numeric", month: "long", day: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GB", options);
}

const columns = [
  { field: "id", headerName: "ID", width: 100 },
  { field: "firstName", headerName: "First name", width: 150 },
  { field: "lastName", headerName: "Last name", width: 150 },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 200,
    valueGetter: (params) =>
      `${params.row.firstName || ""} ${params.row.lastName || ""}`,
  },
  {
    field: "actions",
    headerName: "Actions",
    sortable: false,
    width: 180,
    renderCell: (params) => (
      <div className="actionButtons">
        <Button
          variant="outlined"
          color="primary"
          onClick={() => handleEdit(params.row.id)} // Replace with your edit action logic
        >
          Edit
        </Button>
        <Button
          variant="outlined"
          color="secondary"
          onClick={() => handleDelete(params.row.id)} // Replace with your delete action logic
        >
          Delete
        </Button>
      </div>
    ),
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
    { id: 10, lastName: "Smith", firstName: "Alice", age: 28 },
    { id: 11, lastName: "Johnson", firstName: "David", age: 40 },
    { id: 12, lastName: "Williams", firstName: "Emily", age: 22 },
    { id: 13, lastName: "Brown", firstName: "Michael", age: 55 },
    { id: 14, lastName: "Jones", firstName: "Olivia", age: 30 },
    { id: 15, lastName: "Davis", firstName: "Sophia", age: 48 },
    { id: 16, lastName: "Miller", firstName: "Daniel", age: 33 },
    { id: 17, lastName: "Wilson", firstName: "Grace", age: 26 },
    { id: 18, lastName: "Moore", firstName: "Matthew", age: 37 },
    { id: 19, lastName: "Lee", firstName: "Lily", age: 42 },
    { id: 20, lastName: "Smith", firstName: "Ethan", age: 31 },
    { id: 21, lastName: "Johnson", firstName: "Emma", age: 29 },
    { id: 22, lastName: "Brown", firstName: "James", age: 34 },
    { id: 23, lastName: "Davis", firstName: "Ava", age: 39 },
    { id: 24, lastName: "Miller", firstName: "Benjamin", age: 35 },
    { id: 25, lastName: "Wilson", firstName: "Chloe", age: 25 },
    { id: 26, lastName: "Moore", firstName: "Liam", age: 37 },
    { id: 27, lastName: "Lee", firstName: "Mia", age: 44 },
    { id: 28, lastName: "Smith", firstName: "William", age: 30 },
    { id: 29, lastName: "Johnson", firstName: "Charlotte", age: 32 },
    { id: 30, lastName: "Brown", firstName: "Mason", age: 49 },
    { id: 31, lastName: "Davis", firstName: "Amelia", age: 28 },
    { id: 32, lastName: "Miller", firstName: "Liam", age: 51 },
    { id: 33, lastName: "Wilson", firstName: "Ella", age: 36 },
    { id: 34, lastName: "Moore", firstName: "Henry", age: 45 },
    { id: 35, lastName: "Lee", firstName: "Ava", age: 33 },
    { id: 36, lastName: "Smith", firstName: "Elijah", age: 27 },
    { id: 37, lastName: "Johnson", firstName: "Sophia", age: 43 },
    { id: 38, lastName: "Brown", firstName: "Liam", age: 35 },
    { id: 39, lastName: "Davis", firstName: "Olivia", age: 50 },
    { id: 40, lastName: "Miller", firstName: "Emma", age: 29 },
    { id: 41, lastName: "Wilson", firstName: "Noah", age: 38 },
    { id: 42, lastName: "Moore", firstName: "Chloe", age: 46 },
    { id: 43, lastName: "Lee", firstName: "Liam", age: 31 },
    { id: 44, lastName: "Smith", firstName: "Ava", age: 40 },
    { id: 45, lastName: "Johnson", firstName: "William", age: 33 },
    { id: 46, lastName: "Brown", firstName: "Emily", age: 52 },
    { id: 47, lastName: "Davis", firstName: "Mason", age: 30 },
    { id: 48, lastName: "Miller", firstName: "Olivia", age: 38 },
    { id: 49, lastName: "Wilson", firstName: "James", age: 47 },
    { id: 50, lastName: "Moore", firstName: "Emma", age: 25 }
  ];

function AppointmentModal({ open, close, data }) {
  const handleOpen = () => {
    if (open) {
      console.log(formatDate(data));
      close();
    } else {
      console.log(formatDate(data));
      open();
    }
  };

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
    <div className="scroll-container">
      <Modal
        open={open}
        onClose={handleOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={finalStyle}>
          <DataGrid
            rows={filteredRows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        </Box>
      </Modal>
    </div>
  );
}

export default AppointmentModal;
