"use client";

import React, { useMemo } from "react";
import { Paper, Typography, Box } from "@mui/material";
import { LineChart } from "@mui/x-charts/LineChart";
import { BarChart } from "@mui/x-charts/BarChart";
import { PieChart } from "@mui/x-charts/PieChart";
import { useDashboard } from "@/context/DashboardContext";

export default function Charts() {
  const { filteredData } = useDashboard();

  const chartData = useMemo(() => {
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const salesByMonth = monthNames.map((month) => {
      const monthIndex = monthNames.indexOf(month) + 1;
      const monthStr = monthIndex < 10 ? `0${monthIndex}` : `${monthIndex}`;
      const total = filteredData
        .filter((item) => item.date.startsWith(`2024-${monthStr}`))
        .reduce((sum, item) => sum + item.amount, 0);
      return { month, value: total };
    });

    const categoryDist = ["Enterprise", "SMB", "Startup"].map((category) => {
      const count = filteredData.filter((item) => item.category === category).length;
      return { id: category, label: category, value: count };
    });

    return { salesByMonth, categoryDist };
  }, [filteredData]);

  return (
    <Box
      sx={{
    display: "grid",
    gridTemplateColumns: { xs: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" },
    gap: 3,
    width: "100%"
  }}
    >
      <Paper
        sx={{
          p: 3,
          height: 440,
          boxShadow: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: 4,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              Sales Over Time
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Monthly revenue trends
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: 340 }}>
          <LineChart
            xAxis={[
              {
                scaleType: "point",
                data: chartData.salesByMonth.map((d) => d.month),
                tickLabelStyle: {
                  fontSize: 12,
                  fill: "#64748b",
                },
              },
            ]}
            yAxis={[
              {
                tickLabelStyle: {
                  fontSize: 12,
                  fill: "#64748b",
                },
              },
            ]}
            series={[
              {
                data: chartData.salesByMonth.map((d) => d.value),
                label: "Sales",
                curve: "natural",
                color: "#2563eb",
                area: true,
                showMark: true,
              },
            ]}
            height={320}
            margin={{ top: 20, right: 20, bottom: 30, left: 60 }}
            sx={{
              "& .MuiLineElement-root": {
                strokeWidth: 3,
              },
              "& .MuiAreaElement-root": {
                fill: "url(#gradient)",
                fillOpacity: 0.2,
              },
            }}
          />
        </Box>
      </Paper>

      <Paper
        sx={{
          p: 3,
          height: 440,
          boxShadow: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: 4,
          },
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 2 }}>
          <Box>
            <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
              Monthly Comparisons
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Revenue by month
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: "100%", height: 340 }}>
          <BarChart
            xAxis={[
              {
                scaleType: "band",
                data: chartData.salesByMonth.map((d) => d.month),
                tickLabelStyle: {
                  fontSize: 12,
                  fill: "#64748b",
                },
              },
            ]}
            yAxis={[
              {
                tickLabelStyle: {
                  fontSize: 12,
                  fill: "#64748b",
                },
              },
            ]}
            series={[
              {
                data: chartData.salesByMonth.map((d) => d.value),
                label: "Amount",
                color: "#8b5cf6",
              },
            ]}
            height={320}
            margin={{ top: 20, right: 20, bottom: 30, left: 60 }}
            borderRadius={8}
          />
        </Box>
      </Paper>

      <Paper
        sx={{
          p: 3,
          height: 440,
          boxShadow: 2,
          transition: "all 0.3s ease",
          "&:hover": {
            boxShadow: 4,
          },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <Typography variant="h6" sx={{ fontWeight: 600, mb: 0.5 }}>
            Category Distribution
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Distribution by customer category
          </Typography>
        </Box>
        <Box sx={{ width: "100%", height: 340, display: "flex", justifyContent: "center", alignItems: "center" }}>
          <PieChart
            series={[
              {
                data: chartData.categoryDist.map((item, index) => ({
                  ...item,
                  color: ["#2563eb", "#8b5cf6", "#10b981"][index],
                })),
                highlightScope: { fade: "global", highlight: "item" },
                innerRadius: 60,
                paddingAngle: 2,
                cornerRadius: 4,
              },
            ]}
            height={320}
            slotProps={{
              legend: {
                position: { vertical: "bottom", horizontal: "center" },
              },
            }}
            margin={{ top: 20, right: 20, bottom: 60, left: 20 }}
          />
        </Box>
      </Paper>
    </Box>
  );
}

