"use client";

import { Box, Typography, Paper } from "@mui/material";
import AssessmentIcon from "@mui/icons-material/Assessment";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import Charts from "@/components/Charts";
import DataTable from "@/components/DataTable";
import Filters from "@/components/Filters";

export default function Reports() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3 },
          // Sidebar width agar 240px hai toh desktop par space chhodni hogi
          width: { xs: "100%", sm: `calc(100% - 240px)` },
          // Mobile par sidebar ke niche content dab na jaye
          mt: { xs: 8, md: 0 }, 
        }}
      >
        <Header title="Reports" />
        <Box sx={{ mt: { xs: 5, md: 12 } }}>
          <Paper sx={{ p: 4, mb: 4, boxShadow: 2 }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 2 }}>
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
                <AssessmentIcon sx={{ fontSize: 28 }} />
              </Box>
              <Box>
                <Typography variant="h5" sx={{ fontWeight: 700 }}>
                  Reports Overview
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mt: 0.5 }}>
                  Comprehensive analytics and reporting dashboard for detailed insights
                </Typography>
              </Box>
            </Box>
          </Paper>
          <Filters />
          <Charts />
          <Box sx={{ mt: 4 }}>
            <DataTable />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

