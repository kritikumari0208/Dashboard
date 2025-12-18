"use client";

import {
  Box,
} from "@mui/material";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

export default function Settings() {
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
        <Header title="Settings" />
      </Box>
    </Box>
  );
}

