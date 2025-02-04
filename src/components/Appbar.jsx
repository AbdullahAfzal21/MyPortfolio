import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Avatar, Button, createTheme } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import { Outlet, useLocation } from 'react-router-dom';
import Avatarimp from "../../img/1735124747507.jpg"
import Logo from "../../img/logo.png"

const drawerWidth = 240;
const navItems = ['Home', 'Education', 'Skills', 'Experience', 'Projects', 'Contact'];

function DrawerAppBar({ window }) {
  const location = useLocation();
  const isHome = location.pathname === '/';
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      primary: {
        main: '#1976d2',
      },
      background: {
        default: isHome ? 'transparent' : '#121212',
        paper: isHome ? 'transparent' : '#1E1E1E',
      },
    },
  });

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Sections
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <ThemeProvider theme={darkTheme}>
        <AppBar component="nav">
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
                  <Avatar
                    alt="Abdullah Afzal"
                    src={Avatarimp}
                    sx={{ width: 40, height: 40, mr: 1 }}
                  />
                )}
                {/* <Typography variant="h6" component="div" sx={{ fontSize: '1.2rem' }}>
                  Abdullah Afzal
                </Typography> */}
                <img src={Logo} alt="Abdullah Afzal" width={"130px"}/>
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
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{ mr: 2, display: { md: 'none' } }}
              >
                <MenuIcon />
              </IconButton>
              {!isHome && (
                <Avatar
                  alt="Abdullah Afzal"
                  src={Avatarimp}
                  sx={{ width: 40, height: 40, mr: 1 }}
                />
              )}
                <img src={Logo} alt="Abdullah Afzal" width={"155px"}/>
              <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                {navItems.map((item) => (
                  <Button key={item} sx={{ color: '#fff' }}>
                    {item}
                  </Button>
                ))}
              </Box>
            </Box>
          </Toolbar>
        </AppBar>
      </ThemeProvider>

      {/* Sidebar Drawer */}
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: 'block', sm: 'block', md: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
      </nav>

      <Outlet />
    </Box>
  );
}

DrawerAppBar.propTypes = {
  window: PropTypes.func,
};

export default DrawerAppBar;
