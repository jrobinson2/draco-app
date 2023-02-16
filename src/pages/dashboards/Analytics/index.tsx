import React from 'react';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import {
  Grid,
  Divider as MuiDivider,
  Typography as MuiTypography,
} from '@mui/material';
import { spacing } from '@mui/system';
import { green, red } from '@mui/material/colors';

import Actions from './Actions';
import Stats from './Stats';

const Divider = styled(MuiDivider)(spacing);

const Typography = styled(MuiTypography)(spacing);

function Default() {
  return (
    <React.Fragment>
      <Helmet title="Default Dashboard" />
      <Grid justifyContent="space-between" container spacing={6}>
        <Grid item>
          <Typography variant="h3" gutterBottom>
            Analytics Dashboard
          </Typography>
          <Typography variant="subtitle1">
            <span role="img" aria-label="Robot">
              🤖
            </span>{' '}
            Hello
            <span role="img" aria-label="Waving Hand Sign">
              👋
            </span>
          </Typography>
        </Grid>

        <Grid item>
          <Actions />
        </Grid>
      </Grid>

      <Divider my={6} />

      <Grid container spacing={6}>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Stats"
            amount="2.5"
            chip="Today"
            percentagetext="+10%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Stats"
            amount="2.5"
            chip="Today"
            percentagetext="-10%"
            percentagecolor={red[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Stats"
            amount="2.5"
            chip="Today"
            percentagetext="+10%"
            percentagecolor={green[500]}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={3} xl>
          <Stats
            title="Stats"
            amount="2.5"
            chip="Today"
            percentagetext="-10%"
            percentagecolor={red[500]}
            illustration="#"
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

export default Default;
