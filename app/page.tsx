"use client";

import { Box } from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";
import SummaryCards from "@/components/SummaryCards";
import SecondaryCharts from "@/components/SecondaryCharts";

export default function Home() {
  return (
    <Box sx={{ display: "flex", minHeight: "100vh", bgcolor: "background.default" }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: { xs: 2, sm: 3, md: 4 },
          width: { sm: `calc(100% - 240px)` },
        }}
      >
        <Header title="Dashboard" />
        <Box sx={{ mt: { xs: 11, md: 12 } }}>
          <SummaryCards />
          <Box sx={{ mt: 4 }}>
            <SecondaryCharts />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
