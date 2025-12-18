"use client";

import React, { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Box,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AssessmentIcon from "@mui/icons-material/Assessment";
import PeopleIcon from "@mui/icons-material/People";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuIcon from "@mui/icons-material/Menu";
import { useRouter, usePathname } from "next/navigation";

const drawerWidth = 240;

const menuItems = [
  { text: "Dashboard", icon: <DashboardIcon />, path: "/" },
  { text: "Reports", icon: <AssessmentIcon />, path: "/reports" },
  { text: "Users", icon: <PeopleIcon />, path: "/users" },
  { text: "Settings", icon: <SettingsIcon />, path: "/settings" },
];

export default function Sidebar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    if (isMobile) {
      setMobileOpen(false);
    }
  };

  const drawer = (
    <Box sx={{ height: "100%", bgcolor: "#ffffff" }}>
      <Box
        sx={{
          p: 3,
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          alignItems: "center",
          gap: 1,
        }}
      >
        <Box
          sx={{
            width: 36,
            height: 36,
            borderRadius: "8px",
            bgcolor: "primary.main",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontWeight: "bold",
            fontSize: 18,
          }}
        >
          A
        </Box>
        <Box sx={{ fontSize: 20, fontWeight: 700, color: "text.primary" }}>Analytics</Box>
      </Box>
      <List sx={{ px: 2, py: 3 }}>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding sx={{ mb: 0.5 }}>
            <ListItemButton
              selected={pathname === item.path}
              onClick={() => handleNavigation(item.path)}
              sx={{
                borderRadius: 2,
                mb: 0.5,
                "&.Mui-selected": {
                  bgcolor: "primary.main",
                  color: "white",
                  "&:hover": {
                    bgcolor: "primary.dark",
                  },
                  "& .MuiListItemIcon-root": {
                    color: "white",
                  },
                },
                "&:hover": {
                  bgcolor: pathname === item.path ? "primary.dark" : "action.hover",
                },
              }}
            >
              <ListItemIcon
                sx={{
                  color: pathname === item.path ? "white" : "text.secondary",
                  minWidth: 40,
                }}
              >
                {item.icon}
              </ListItemIcon>
              <ListItemText
                primary={item.text}
                primaryTypographyProps={{
                  fontSize: 15,
                  fontWeight: pathname === item.path ? 600 : 500,
                }}
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {isMobile && (
        <IconButton
          color="inherit"
          aria-label="open drawer"
          edge="start"
          onClick={handleDrawerToggle}
          sx={{ position: "fixed", top: 16, left: 16, zIndex: 1201 }}
        >
          <MenuIcon />
        </IconButton>
      )}

      <Drawer
        variant={isMobile ? "temporary" : "permanent"}
        open={isMobile ? mobileOpen : true}
        onClose={handleDrawerToggle}
        ModalProps={{ keepMounted: true }}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: 1,
            borderColor: "divider",
          },
        }}
      >
        {drawer}
      </Drawer>
    </>
  );
}

