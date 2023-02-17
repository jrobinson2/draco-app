import React from 'react';
import styled from '@emotion/styled';
import { withTheme } from '@emotion/react';

import {
  Grid,
  AppBar as MuiAppBar,
  Toolbar,
  IconButton as MuiIconButton,
} from '@mui/material';

import { Menu as MenuIcon } from '@mui/icons-material';

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
            <Grid item sx={{ display: { xs: 'block', md: 'none' } }}>
              <IconButton
                color="inherit"
                aria-label="Open drawer"
                onClick={onDrawerToggle}
                size="large"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <NavbarUserDropdown />
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default withTheme(Navbar);
