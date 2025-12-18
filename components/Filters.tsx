"use client";

import React from "react";
import {
  Box,
  TextField,
  Select,
  MenuItem,
  Button,
  FormControl,
  InputLabel,
  Paper,
  Typography,
} from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useDashboard } from "@/context/DashboardContext";
import { categories, statuses } from "@/data/mockData";

export default function Filters() {
  const { filters, setFilters, resetFilters } = useDashboard();

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ ...filters, search: e.target.value });
  };

  const handleCategoryChange = (e: any) => {
    setFilters({ ...filters, category: e.target.value });
  };

  const handleStatusChange = (e: any) => {
    setFilters({ ...filters, status: e.target.value });
  };

  const handleDateToChange = (date: Date | null) => {
  const dateString = date ? date.toLocaleDateString('en-CA') : null;
  setFilters({ ...filters, dateTo: dateString });
};

  const handleDateFromChange = (date: Date | null) => {
  // Local date ko "YYYY-MM-DD" format mein convert karne ka sahi tarika
  const dateString = date ? date.toLocaleDateString('en-CA') : null; 
  setFilters({ ...filters, dateFrom: dateString });
};

  return (
    <Paper sx={{ p: 3, mb: 3, boxShadow: 2 }}>
      <Typography variant="h6" sx={{ mb: 3, fontWeight: 600 }}>
        Filters
      </Typography>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Box
            sx={{
              display: "grid",
              gridTemplateColumns: { 
                xs: "1fr", 
                sm: "repeat(2, 1fr)", 
                md: "repeat(3, 1fr)", 
                lg: "2.5fr 1.5fr 1.5fr 1.5fr 1.5fr 1fr" 
              },
              gap: 2,
              alignItems: "center",
            }}
          >
          <TextField
            fullWidth
            label="Search"
            variant="outlined"
            value={filters.search}
            onChange={handleSearchChange}
            placeholder="Search by name, type..."
            sx={{
              "& .MuiOutlinedInput-root": {
                "&:hover fieldset": {
                  borderColor: "primary.main",
                },
              },
            }}
          />

          <FormControl fullWidth>
            <InputLabel>Category</InputLabel>
            <Select
              value={filters.category}
              onChange={handleCategoryChange}
              label="Category"
              sx={{
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              }}
            >
              {categories.map((cat) => (
                <MenuItem key={cat} value={cat}>
                  {cat}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <FormControl fullWidth>
            <InputLabel>Status</InputLabel>
            <Select
              value={filters.status}
              onChange={handleStatusChange}
              label="Status"
              sx={{
                "&:hover .MuiOutlinedInput-notchedOutline": {
                  borderColor: "primary.main",
                },
              }}
            >
              {statuses.map((status) => (
                <MenuItem key={status} value={status}>
                  {status}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

          <DatePicker
            label="From Date"
            value={filters.dateFrom ? new Date(filters.dateFrom) : null}
            onChange={handleDateFromChange}
            slotProps={{
              textField: {
                fullWidth: true,
                sx: {
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                },
              },
            }}
          />    

          <DatePicker
            label="To Date"
            value={filters.dateTo ? new Date(filters.dateTo) : null}
            onChange={handleDateToChange}
            slotProps={{
              textField: {
                fullWidth: true,
                sx: {
                  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "primary.main",
                  },
                },
              },
            }}
          />      

          <Button
            fullWidth
            variant="outlined"
            onClick={resetFilters}
            sx={{
              height: 56,
              borderWidth: 2,
              fontWeight: 600,
              "&:hover": {
                borderWidth: 2,
                bgcolor: "action.hover",
              },
            }}
          >
            Reset
          </Button>
        </Box>
      </LocalizationProvider>
    </Paper>
  );
}

