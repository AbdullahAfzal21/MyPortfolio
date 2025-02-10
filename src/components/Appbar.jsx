import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import { Avatar, Button, Drawer, List, ListItem, ListItemButton, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link, Outlet, useLocation } from 'react-router-dom';
import Avatarimp from "../../img/1735124747507.jpg";
import Logo from "../../img/logo.png";
import Footer from './footer';

function DrawerAppBar() {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [mobileOpen, setMobileOpen] = React.useState(false); // ✅ Sidebar toggle state

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen); // ✅ Sidebar open/close toggle function
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "Education", path: "/education" },
    { label: "Skills", path: "/skills" },
    { label: "Experience", path: "/experience" },
    { label: "Projects", path: "/projects" },
    { label: "Objectives", path: "/objective" }
  ];

  // ✅ Mobile Sidebar Component
  const drawer = (
    <Box
      sx={{ width: 250, bgcolor: "#121212", height: "100vh", color: "#fff", paddingTop: 2 }}
      role="presentation"
      onClick={handleDrawerToggle}
    >
      <List>
        {navItems.map((item) => (
          <ListItem key={item.path} disablePadding>
            <ListItemButton component={Link} to={item.path} selected={location.pathname === item.path}>
              <ListItemText primary={item.label} sx={{ textAlign: "center" }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{
          backgroundColor: isScrolled ? "#121212" : (isHome ? "transparent" : "#121212"),
          transition: "background-color 0.3s ease-in-out",
          boxShadow: isScrolled ? "0px 4px 10px rgba(0, 0, 0, 0.2)" : "none",
        }}
      >
        <Toolbar>
          {/* Mobile Menu */}
          <Box
            sx={{
              display: { xs: 'flex', sm: 'flex', md: 'none' },
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
              {!isHome && (
                <Avatar alt="Abdullah Afzal" src={Avatarimp} sx={{ width: 40, height: 40, mr: 1 }} />
              )}
              <img src={Logo} alt="Abdullah Afzal" width={"130px"} />
            </Box>

            {/* Sidebar Toggle Button */}
            <IconButton color="inherit" aria-label="open drawer" onClick={handleDrawerToggle}>
              <MenuIcon />
            </IconButton>
          </Box>

          {/* Desktop Menu */}
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <Box sx={{ display: "flex", alignItems: 'center', justifyContent: 'space-between' }}>
              {!isHome && (
                <Avatar alt="Abdullah Afzal" src={Avatarimp} sx={{ width: 40, height: 40, mr: 1 }} />
              )}
              <img src={Logo} alt="Abdullah Afzal" width={"155px"} />
            </Box>
            <Box sx={{ display: { xs: 'none', md: 'block' } }}>
              {navItems.map((item) => (
                <Button
                  key={item.path}
                  component={Link}
                  to={item.path}
                  sx={{
                    color: '#fff',
                    textTransform: "none",
                    borderBottom: location.pathname === item.path && location.pathname !== "/" ? "2px solid white" : "none",
                    borderRadius: 0,
                  }}
                >
                  {item.label}
                </Button>
              ))}
            </Box>
          </Box>
        </Toolbar>
      </AppBar>

      {/* ✅ Mobile Sidebar Drawer */}
      <Drawer
        anchor="right"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        sx={{
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: 250 },
        }}
      >
        {drawer}
      </Drawer>

      <Outlet />
      <Footer />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
