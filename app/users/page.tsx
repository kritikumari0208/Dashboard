"use client";

import { Box, Typography, Paper, Grid, Card, CardContent } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import DataTable from "@/components/DataTable";

export default function Users() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          // Mobile par padding kam rakhi hai (xs: 2) aur desktop par zyada (md: 4)
          p: { xs: 2, sm: 3, md: 4 },
          // Sidebar ke liye space handle karta hai
          width: { xs: "100%", sm: `calc(100% - 240px)` },
          overflowX: "hidden", // Table ki wajah se screen bahar na jaye
        }}
      >
        <Header title="Users" />

        {/* Header aur Sidebar ke niche ka space handle karne ke liye margin */}
        <Box sx={{ mt: { xs: 10, md: 12 } }}>
          
          {/* Main Title Paper */}
          <Paper sx={{ p: { xs: 2, md: 4 }, mb: 4, boxShadow: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: 2,
                  bgcolor: "#eff6ff",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "primary.main",
                }}
              >
                <PeopleIcon sx={{ fontSize: 28 }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700, fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
                  User Management
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
                  Monitor and manage user accounts and activities.
                </Typography>
              </Box>
            </Box>
          </Paper>

          {/* Data Table Section */}
          <Box sx={{ width: "100%", mt: 4 }}>
            <DataTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}