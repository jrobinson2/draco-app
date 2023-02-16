import React from 'react';
import styled from '@emotion/styled';

import { Button as MuiButton } from '@mui/material';
import {
  Loop as LoopIcon,
  FilterList as FilterListIcon,
} from '@mui/icons-material';
import { spacing } from '@mui/system';

const Button = styled(MuiButton)(spacing);

const SmallButton = styled(Button)`
  padding: 4px;
  min-width: 0;

  svg {
    width: 0.9em;
    height: 0.9em;
  }
`;

function Actions() {
  return (
    <React.Fragment>
      <SmallButton size="small" mr={2}>
        <LoopIcon />
      </SmallButton>
      <SmallButton size="small" mr={2}>
        <FilterListIcon />
      </SmallButton>
    </React.Fragment>
  );
}

export default Actions;
