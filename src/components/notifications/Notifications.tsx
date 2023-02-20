import React from 'react';
import styled from '@emotion/styled';

import {
  Alert as MuiAlert,
  Box,
  Drawer as MuiDrawer,
  ListItemButton,
} from '@mui/material';

import { spacing } from '@mui/system';

import { SidebarItemsType } from '../../types/sidebar';

const Drawer = styled(MuiDrawer)`
  border-right: 0;

  > div {
    border-right: 0;
  }
`;

const Wrapper = styled.div`
  width: 258px;
  overflow-x: hidden;
`;

const Heading = styled(ListItemButton)`
  font-size: ${(props) => props.theme.typography.h5.fontSize};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  font-family: ${(props) => props.theme.typography.fontFamily};
  min-height: 56px;

  ${(props) => props.theme.breakpoints.up('sm')} {
    min-height: 64px;
  }
`;

const Alert = styled(MuiAlert)(spacing);

export type SidebarProps = {
  PaperProps: {
    style: {
      width: number;
    };
  };
  variant?: 'permanent' | 'persistent' | 'temporary';
  open?: boolean;
  onClose?: () => void;
  items: {
    title: string;
    pages: SidebarItemsType[];
  }[];
  showFooter?: boolean;
  anchor?: 'bottom' | 'left' | 'right' | 'top' | undefined;
};

const Sidebar: React.FC<SidebarProps> = ({
  items,
  showFooter = true,
  anchor,
  ...rest
}) => {
  return (
    <Drawer variant="permanent" anchor={anchor} {...rest}>
      <Wrapper>
        <Heading>Notifications</Heading>

        <Box px={4} my={3}>
          <Alert mb={4} icon={false} severity="info">
            <strong>Hello!</strong> No issues to report here today.
          </Alert>
          <Alert mb={4} icon={false} severity="error">
            <strong>Error</strong> This is not working!
          </Alert>
        </Box>
      </Wrapper>
    </Drawer>
  );
};

export default Sidebar;
