"use client";

import React from "react";
import { Card, CardContent, Typography, Box } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { summaryMetrics } from "@/data/mockData";

const cardConfig: Record<
  string,
  { icon: React.ReactElement; color: string; bgColor: string }
> = {
  users: {
    icon: <PeopleIcon sx={{ fontSize: 32 }} />,
    color: "#2563eb",
    bgColor: "#eff6ff",
  },
  orders: {
    icon: <ShoppingCartIcon sx={{ fontSize: 32 }} />,
    color: "#8b5cf6",
    bgColor: "#f5f3ff",
  },
  revenue: {
    icon: <AttachMoneyIcon sx={{ fontSize: 32 }} />,
    color: "#10b981",
    bgColor: "#ecfdf5",
  },
};

export default function SummaryCards() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "repeat(2, 1fr)", md: "repeat(3, 1fr)" },
        gap: 3,
      }}
    >
      {summaryMetrics.map((metric) => (
        <Card
          key={metric.id}
          sx={{
            height: "100%",
            transition: "all 0.3s ease",
            "&:hover": {
              transform: "translateY(-4px)",
              boxShadow: 4,
            },
          }}
        >
          <CardContent sx={{ p: 3 }}>
            <Box sx={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between" }}>
              <Box sx={{ flex: 1 }}>
                <Typography
                  variant="body2"
                  color="text.secondary"
                  sx={{ fontWeight: 600, mb: 1, textTransform: "uppercase", fontSize: 12 }}
                >
                  {metric.label}
                </Typography>
                <Typography variant="h4" sx={{ fontWeight: 700, mb: 1.5, color: "text.primary" }}>
                  {metric.id === "revenue"
                    ? `₹${metric.value.toLocaleString()}`
                    : metric.value.toLocaleString()}
                </Typography>
                <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                  <TrendingUpIcon sx={{ fontSize: 16, color: "success.main" }} />
                  <Typography variant="body2" sx={{ color: "success.main", fontWeight: 600 }}>
                    +12.5%
                  </Typography>
                  <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                    vs last month
                  </Typography>
                </Box>
              </Box>
              <Box
                sx={{
                  width: 56,
                  height: 56,
                  borderRadius: 2,
                  bgcolor: cardConfig[metric.id].bgColor,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: cardConfig[metric.id].color,
                }}
              >
                {cardConfig[metric.id].icon}
              </Box>
            </Box>
          </CardContent>
        </Card>
      ))}
    </Box>
  );
}

