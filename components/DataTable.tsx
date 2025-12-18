"use client";

import React, { useState } from "react";
import { Paper, Typography, Box, Modal, IconButton, Chip } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useDashboard } from "@/context/DashboardContext";

// Columns ko flex: 1 dene se wo poori width cover karenge
const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 0.5, minWidth: 70 },
  { field: "name", headerName: "Name", flex: 1.5, minWidth: 180 },
  { field: "date", headerName: "Date", flex: 1, minWidth: 120 },
  { 
    field: "status", 
    headerName: "Status", 
    flex: 1, 
    minWidth: 110,
    renderCell: (params) => {
      const status = params.value;
      let color: "success" | "warning" | "error" | "default" = "default";
      if (status === "Active") color = "success";
      else if (status === "Pending") color = "warning";
      else if (status === "Closed") color = "error";
      
      return <Chip label={status} color={color} size="small" variant="outlined" sx={{ fontWeight: 600 }} />;
    }
  },
  { 
    field: "amount", 
    headerName: "Amount", 
    flex: 1, 
    minWidth: 120, 
    valueFormatter: (value: number) => `₹${value.toLocaleString()}` 
  },
  { field: "type", headerName: "Type", flex: 1, minWidth: 130 },
  { field: "category", headerName: "Category", flex: 1, minWidth: 120 },
];

export default function DataTable() {
  const { filteredData } = useDashboard();
  const [selectedRow, setSelectedRow] = useState<any>(null);
  const [open, setOpen] = useState(false);

  const handleRowClick = (params: any) => {
    setSelectedRow(params.row);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedRow(null);
  };

  return (
    <>
      <Paper sx={{ p: 3, boxShadow: 3, borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ mb: 3 }}>
          <Typography variant="h6" sx={{ fontWeight: 700, color: "#1e293b" }}>
            Data Management
          </Typography>
          <Typography variant="body2" color="text.secondary">
            View and manage your records. Click any row for details.
          </Typography>
        </Box>
        
        {/* Box height 100% width cover karega */}
        <Box sx={{ height: 600, width: "100%" }}>
          <DataGrid
            rows={filteredData}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
              },
            }}
            pageSizeOptions={[5, 10, 20]}
            checkboxSelection
            onRowClick={handleRowClick}
            sx={{
              border: "none",
              "& .MuiDataGrid-columnHeaders": {
                bgcolor: "#f8fafc",
                color: "#64748b",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                fontWeight: 700,
              },
              "& .MuiDataGrid-cell": {
                borderColor: "#f1f5f9",
                fontSize: "0.875rem",
              },
              "& .MuiDataGrid-row:hover": {
                bgcolor: "#f8fafc",
                cursor: "pointer",
              },
              "& .MuiDataGrid-footerContainer": {
                borderTop: "1px solid #f1f5f9",
              },
            }}
          />
        </Box>
      </Paper>

      {/* Modal Section remains same as your logic */}
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: { xs: "90%", sm: 500 },
            bgcolor: "white",
            borderRadius: 3,
            boxShadow: 24,
            outline: "none",
            overflow: "hidden"
          }}
        >
          {selectedRow && (
            <>
              <Box sx={{ p: 3, bgcolor: "primary.main", color: "white", display: "flex", justifyContent: "space-between" }}>
                <Typography variant="h6">Record Details</Typography>
                <IconButton onClick={handleClose} sx={{ color: "white" }}><CloseIcon /></IconButton>
              </Box>
              <Box sx={{ p: 4, display: "grid", gridTemplateColumns: "1fr 1fr", gap: 3 }}>
                <DetailItem label="ID" value={`#${selectedRow.id}`} />
                <DetailItem label="Company" value={selectedRow.name} fullWidth />
                <DetailItem label="Date" value={selectedRow.date} />
                <DetailItem label="Status" value={selectedRow.status} />
                <DetailItem label="Amount" value={`₹${selectedRow.amount.toLocaleString()}`} isSuccess />
                <DetailItem label="Type" value={selectedRow.type} />
                <DetailItem label="Category" value={selectedRow.category} />
              </Box>
            </>
          )}
        </Box>
      </Modal>
    </>
  );
}

// Helper component for cleaner Modal UI
function DetailItem({ label, value, fullWidth, isSuccess }: any) {
  return (
    <Box sx={{ gridColumn: fullWidth ? "span 2" : "span 1" }}>
      <Typography variant="caption" color="text.secondary" sx={{ fontWeight: 700 }}>{label}</Typography>
      <Typography variant="body1" sx={{ fontWeight: 600, color: isSuccess ? "success.main" : "inherit" }}>
        {value}
      </Typography>
    </Box>
  );
}