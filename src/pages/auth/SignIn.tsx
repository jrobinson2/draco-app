import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet-async';

import {
  Avatar,
  Button,
  Checkbox,
  FormControlLabel,
  Paper,
  TextField as MuiTextField,
  Typography,
} from '@mui/material';

import { spacing } from '@mui/system';

import { ReactComponent as Logo } from '../../vendor/vite.svg';

const TextField = styled(MuiTextField)<{ my?: number }>(spacing);

const Brand = styled(Logo)`
  fill: ${(props) => props.theme.palette.primary.main};
  width: 64px;
  height: 64px;
  margin-bottom: 32px;
`;

const Wrapper = styled(Paper)`
  padding: ${(props) => props.theme.spacing(6)};

  ${(props) => props.theme.breakpoints.up('md')} {
    padding: ${(props) => props.theme.spacing(10)};
  }
`;

const BigAvatar = styled(Avatar)`
  width: 92px;
  height: 92px;
  text-align: center;
  margin: 0 auto ${(props) => props.theme.spacing(5)};
`;

function SignIn() {
  const navigate = useNavigate();

  return (
    <>
      <Brand />
      <Wrapper>
        <Helmet title="Sign In" />
        <BigAvatar
          alt="Ironheart"
          src="https://cdn.shopify.com/s/files/1/0336/2894/6571/products/Ironheart_21_946x673.jpg?v=1646407782"
        />

        <Typography component="h1" variant="h4" align="center" gutterBottom>
          Welcome back, Ironheart!
        </Typography>
        <Typography component="h2" variant="body1" align="center">
          Sign in to your account to continue
        </Typography>

        <form onSubmit={() => navigate('/dashboard/analytics')}>
          <TextField
            type="email"
            name="email"
            label="Email Address"
            fullWidth
            my={2}
          />
          <TextField
            type="password"
            name="password"
            label="Password"
            fullWidth
            my={2}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button type="submit" fullWidth variant="contained" color="primary">
            Sign in
          </Button>
          <Button component={Link} to="#" fullWidth color="primary">
            Forgot password
          </Button>
        </form>
      </Wrapper>
    </>
  );
}

export default SignIn;
