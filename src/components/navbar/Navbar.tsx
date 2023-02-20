import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';

import {
  Grid,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton as MuiIconButton,
} from '@mui/material';

import { Menu as MenuIcon, ExpandMore } from '@mui/icons-material';

import NavbarNotificationsDropdown from './NavbarNotificationsDropdown';
import NavbarUserDropdown from './NavbarUserDropdown';

const AppBar = styled(MuiAppBar)`
  background: ${(props) => props.theme.header.background};
  color: ${(props) => props.theme.header.color};
`;

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

type NavbarProps = {
  onDrawerToggle: React.MouseEventHandler<HTMLElement>;
};

const Navbar: React.FC<NavbarProps> = ({ onDrawerToggle }) => {
  return (
    <>
      <AppBar position="sticky" elevation={0}>
        <Toolbar>
          <Grid container alignItems="center">
            <Grid item sx={{ display: { xs: 'block', lg: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item sx={{ display: { xs: 'none', lg: 'block' } }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
                size="large"
              >
                <ExpandMore />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <NavbarNotificationsDropdown />
              <NavbarUserDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withTheme(Navbar);
