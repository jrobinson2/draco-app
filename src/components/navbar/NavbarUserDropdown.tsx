import React from 'react';
import styled from '@emotion/styled';
import { Power } from 'react-feather';

import {
  Tooltip,
  Menu,
  MenuItem,
  IconButton as MuiIconButton,
} from '@mui/material';

const IconButton = styled(MuiIconButton)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

function NavbarUserDropdown() {
  const [anchorMenu, setAnchorMenu] = React.useState<any>(null);

  const toggleMenu = (event: React.SyntheticEvent) => {
    setAnchorMenu(event.currentTarget);
  };

  const closeMenu = () => {
    setAnchorMenu(null);
  };

  return (
    <>
      <Tooltip title="Log out">
        <IconButton
          aria-owns={Boolean(anchorMenu) ? 'menu-appbar' : undefined}
          aria-haspopup="true"
          onClick={toggleMenu}
          color="inherit"
          size="large"
        >
          <Power />
        </IconButton>
      </Tooltip>
      <Menu
        id="menu-appbar"
        anchorEl={anchorMenu}
        open={Boolean(anchorMenu)}
        onClose={closeMenu}
      >
        <MenuItem>Log out</MenuItem>
      </Menu>
    </>
  );
}

export default NavbarUserDropdown;
