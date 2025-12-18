"use client";

import React from "react";
import { Paper, Typography, Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
// Static data import karein
import { salesByMonth } from "@/data/mockData";

export default function SecondaryCharts() {
  return (
    <Box
      sx={{
        display: "grid",
        // Grid configuration: Line Chart ko 2 columns aur Bar Chart ko 1 column milega
        gridTemplateColumns: { xs: "1fr", lg: "2fr 1fr" }, 
        gap: 3,
        width: "100%",
        mt: 4
      }}
    >
      {/* 1. Bigger Line Chart */}
      <Paper
        sx={{
            p: 3,
            height: 640,
            boxShadow: 2,
            transition: "all 0.3s ease",
            "&:hover": { boxShadow: 4 },
        }}
      >
        <Box sx={{ mb: 2 }}>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            Annual Revenue Trend
            </Typography>
            <Typography variant="body2" color="text.secondary">
            Static sales performance overview
            </Typography>
        </Box>
        <Box sx={{ width: "100%", height: 500 }}>
            <LineChart
            xAxis={[{ 
                scaleType: "point", 
                data: salesByMonth.map((d) => d.month),
                tickLabelStyle: { fontSize: 12, fill: "#64748b" }
            }]}
            series={[{
                data: salesByMonth.map((d) => d.value),
                label: "Revenue",
                color: "#3b82f6", // Light Blue primary color
                area: true,
                showMark: true,
            }]}
            height={500} // Increased to match Paper height
            margin={{ top: 40, right: 50, bottom: 60, left: 60 }}
            sx={{
                "& .MuiAreaElement-root": {
                fill: "url(#lightBlueGradient)", // Gradient ID ko yahan link kiya
                fillOpacity: 0.4,
                },
                "& .MuiLineElement-root": {
                strokeWidth: 3,
                }
            }}
            >
            {/* SVG Gradient Definition */}
            <defs>
                <linearGradient id="lightBlueGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
            </defs>
            </LineChart>
        </Box>
        </Paper>

      {/* 2. Smaller Bar Chart */}
      <Paper
        sx={{
          p: 3,
          height: 640,
          boxShadow: 2,
          transition: "all 0.3s ease",
          "&:hover": { boxShadow: 4 },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            Monthly Stats
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Comparative view
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: 340 }}>
          <BarChart
            xAxis={[{ 
              scaleType: "band", 
              data: salesByMonth.map((d) => d.month),
              tickLabelStyle: { fontSize: 10, fill: "#64748b" }
            }]}
            series={[{
              data: salesByMonth.map((d) => d.value),
              label: "Value",
              color: "#3b82f6",
            }]}
            height={450}
            margin={{ top: 40, right: 50, bottom: 30, left: 50 }}
            borderRadius={4}
          />
        </Box>
      </Paper>
    </Box>
  );
}