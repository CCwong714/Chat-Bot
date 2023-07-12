import { Link, Stack, Typography } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import React from 'react';
import RegisterForm from '../../sections/auth/RegisterForm';
import AuthSocial from '../../sections/auth/AuthSocial';

const Register = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
        <Typography variant='h4'>Get Started With Tawk</Typography>
        <Stack direction='row' spacing={0.5}>
          <Typography>Already have an account ?</Typography>
          <Link component={RouterLink} to='/auth/login'>
            Sign in
          </Link>
        </Stack>
        {/* Register Form */}

        <RegisterForm />

        <Typography
          component='div'
          sx={{
            color: 'text.secondary',
            mt: 3,
            typography: 'caption',
            textAlign: 'center',
          }}
        >
          {'By sigining up, I agree to '}
          <Link
            component={RouterLink}
            underline='always'
            color='text.primary'
            sx={{ cursor: 'pointer' }}
          >
            Trems of service
          </Link>
          {' and '}
          <Link
            component={RouterLink}
            underline='always'
            color='text.primary'
            sx={{ cursor: 'pointer' }}
          >
            Privacy Policy
          </Link>
          .
        </Typography>
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Register;
