"use client";
import * as React from "react";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import LocalHotelIcon from "@mui/icons-material/LocalHotel";
import HouseIcon from "@mui/icons-material/House";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import ShowChartIcon from "@mui/icons-material/ShowChart";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  Avatar,
  Button,
  Tooltip,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import LanguageIcon from "@mui/icons-material/Language";
import PaymentIcon from "@mui/icons-material/Payment";
import MapIcon from "@mui/icons-material/Map";
import SettingsIcon from "@mui/icons-material/Settings";
import FeedbackIcon from "@mui/icons-material/Feedback";
import HelpIcon from "@mui/icons-material/Help";

const pages = [
  {
    text: "Travel",
    icon: <WorkIcon sx={{color: "#acc6f9"}} />,
  },
  {
    text: "Explore",
    icon: <TravelExploreIcon sx={{color: "#acc6f9"}} />,
  },
  {
    text: "Flights",
    icon: <FlightTakeoffIcon sx={{color: "#acc6f9"}} />,
  },
  {
    text: "Hotels",
    icon: <LocalHotelIcon sx={{color: "#acc6f9"}} />,
  },
  {
    text: "Vacation Rentals",
    icon: <HouseIcon sx={{color: "#acc6f9"}} />,
  },
];
const navItems = [
  [
    {text: "Travel", icon: <WorkIcon sx={{color: "white"}} />},
    {text: "Explore", icon: <TravelExploreIcon sx={{color: "white"}} />},
    {text: "Flights", icon: <FlightTakeoffIcon sx={{color: "white"}} />},
    {text: "Hotels", icon: <LocalHotelIcon sx={{color: "white"}} />},
    {text: "Vacation Rentals", icon: <HouseIcon sx={{color: "white"}} />},
  ],
  [
    {
      text: "Tracked flight prices",
      icon: <ShowChartIcon sx={{color: "white"}} />,
    },
    {text: "Change language", icon: <LanguageIcon sx={{color: "white"}} />},
    {text: "Change currency", icon: <PaymentIcon sx={{color: "white"}} />},
    {text: "Change location", icon: <MapIcon sx={{color: "white"}} />},
  ],
  [
    {
      text: "Flights settings",
      icon: <SettingsIcon sx={{color: "white"}} />,
    },
    {text: "Feedback", icon: <FeedbackIcon sx={{color: "white"}} />},
    {text: "Help", icon: <HelpIcon sx={{color: "white"}} />},
  ],
];
const drawerWidth = 240;

function ResponsiveAppBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(false);
  // const [anchorElUser, setAnchorElUser] = React.useState(false);

  const toggleNavMenu = () => {
    setAnchorElNav(!anchorElNav);
  };
  // const handleOpenUserMenu = () => {
  //   setAnchorElUser(true);
  // };

  const handleCloseNavMenu = () => {
    setAnchorElNav(false);
  };

  const DrawerList = (
    <Box
      component="nav"
      sx={{overflow: "auto"}}
      role="presentation"
      key="boxDrawer"
      //   onClick={setAnchorElNav(false)}
    >
      {navItems.map((items, index) => (
        <div key={index}>
          <List key={index}>
            {items.map((item) => (
              <ListItem key={item.text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>{item.icon}</ListItemIcon>
                  <ListItemText primary={item.text} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
          <Divider sx={{bgcolor: "#5f6368"}} />
        </div>
      ))}
    </Box>
  );

  return (
    <nav>
      <Box sx={{display: "flex"}}>
        <AppBar
          position="fixed"
          sx={{
            bgcolor: "#202124",
            zIndex: (theme) => theme.zIndex.drawer + 1,
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          }}
        >
          <Toolbar disableGutters>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={toggleNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: {xs: "none", md: "flex"},
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Google
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="#app-bar-with-responsive-menu"
              sx={{
                mr: 2,
                display: {xs: "flex", md: "none"},
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Google
            </Typography>
            <Box sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
              {pages.map((page) => (
                <Button
                  key={page.text}
                  onClick={handleCloseNavMenu}
                  variant="outlined"
                  startIcon={page.icon}
                  sx={{
                    my: 2,
                    display: "flex",
                    borderColor: "#3c4043",
                    color: "#acc6f9",
                    alignItems: "center",
                    flexWrap: "wrap",
                    borderRadius: 12,
                  }}
                >
                  {page.text}
                </Button>
              ))}
            </Box>
            <Box sx={{flexGrow: 0}}>
              <Tooltip title="Open settings">
                <IconButton sx={{p: 0}}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
                </IconButton>
              </Tooltip>
            </Box>
          </Toolbar>
        </AppBar>
        <Drawer
          open={anchorElNav}
          onClose={() => setAnchorElNav(false)}
          hideBackdrop
          sx={{
            width: drawerWidth,
            flexShrink: 0,
            [`& .MuiDrawer-paper`]: {
              width: drawerWidth,
              boxSizing: "border-box",
              backgroundColor: "#303133",
              color: "#ededed",
            },
          }}
        >
          <Toolbar />
          {DrawerList}
        </Drawer>
      </Box>
    </nav>
  );
}
export default ResponsiveAppBar;
