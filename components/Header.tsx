"use client";

import React from "react";
import { AppBar, Toolbar, Typography, IconButton, Badge, Avatar, Box } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";

interface HeaderProps {
  title: string;
}

export default function Header({ title }: HeaderProps) {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        width: { md: `calc(100% - 240px)` },
        ml: { md: `240px` },
        bgcolor: "background.paper",
        color: "text.primary",
        borderBottom: 1,
        borderColor: "divider",
      }}
    >
      <Toolbar sx={{ minHeight: 72 }}>
        <Typography
          variant="h5"
          noWrap
          component="div"
          sx={{ flexGrow: 1, ml: { xs: 6, md: 0 }, fontWeight: 700 }}
        >
          {title}
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <IconButton
            color="inherit"
            sx={{
              bgcolor: "action.hover",
              "&:hover": {
                bgcolor: "action.selected",
              },
            }}
          >
            <Badge
              badgeContent={4}
              color="error"
              sx={{
                "& .MuiBadge-badge": {
                  fontSize: 10,
                  height: 18,
                  minWidth: 18,
                },
              }}
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Avatar
            sx={{
              bgcolor: "primary.main",
              width: 40,
              height: 40,
              fontWeight: 600,
              boxShadow: 2,
            }}
          >
            A
          </Avatar>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

