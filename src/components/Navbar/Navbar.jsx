import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import { Link, useLocation } from 'react-router-dom';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';


import logo from '../../assets/commerce.png';
import useStyles from './styles';
import { deepPurple, lightBlue, pink } from '@material-ui/core/colors';

const theme = createMuiTheme({
  palette: {
    secondary: {
      main: pink[100]}
  }
});

const PrimarySearchAppBar = ({ totalItems }) => {
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);
  const classes = useStyles();
  const location = useLocation();

  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => setMobileMoreAnchorEl(null);

  const mobileMenuId = 'primary-search-account-menu-mobile';

  const renderMobileMenu = (
    <Menu anchorEl={mobileMoreAnchorEl} anchorOrigin={{ vertical: 'top', horizontal: 'right' }} id={mobileMenuId} keepMounted transformOrigin={{ vertical: 'top', horizontal: 'right' }} open={isMobileMenuOpen} onClose={handleMobileMenuClose}>
      <MenuItem>
        <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCart />
          </Badge>
        </IconButton>
        <p>Cart</p>
      </MenuItem>
    </Menu>
  );

  return (
    <>
      <MuiThemeProvider theme={theme}>
      <AppBar position="fixed" className={classes.appBar} color="secondary">
      
        <Toolbar>
          <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
            <img src={logo} alt="commerce.js" height="25px" className={classes.image} /> The Soul & The Moon
          </Typography>
          {/* <Typography component={Link} to="/about" variant="h6" className={classes.title} color="inherit">
          A propos de la marque
          </Typography> */}
          <div className={classes.grow} />
          {location.pathname === '/' && (
          <div className={classes.button}>


 
            <IconButton component={Link} to="/cart" aria-label="Show cart items" color="inherit">
              <Badge badgeContent={totalItems} color="secondary">
                <ShoppingCart />
              </Badge>
            </IconButton>
          </div>
          )}
        </Toolbar>
      </AppBar>
      </MuiThemeProvider>
      {renderMobileMenu}
    </>
  );
};

export default PrimarySearchAppBar;
