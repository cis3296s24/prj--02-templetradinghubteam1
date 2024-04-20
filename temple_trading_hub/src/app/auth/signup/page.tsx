'use client';
import { Avatar, Box, Button, Container, CssBaseline, Grid, TextField, Typography } from '@mui/material';
import { useEffect, useState } from 'react';
import { UserAuth } from '@context/AuthContext';
import { useRouter } from 'next/navigation';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

const SignUp = () => {
  const router = useRouter();
  const { user, signUp } = UserAuth(); // Assuming signUp is a function provided by UserAuth

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async (e: any) => {
    e.preventDefault();
    await signUp(email, password); // Make sure signUp is accessible here
  };

  useEffect(() => {
    if (user) {
      router.push('/');
    }
  }, [user, router]);

  return (
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Avatar sx={{ m: 1, bgcolor: 'primary.main', color: 'white' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component='h1' variant='h5'>
          Sign Up
        </Typography>
        <Box component='form' noValidate onSubmit={handleSignUp} sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id='email'
                name='email'
                autoComplete='email'
                onChange={(e) => setEmail(e.target.value)}
                hiddenLabel
                size='small'
                variant='outlined'
                aria-label='Email Address*'
                placeholder='Email Address*'
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name='password'
                type='password'
                id='password'
                autoComplete='new-password'
                onChange={(e) => setPassword(e.target.value)}
                hiddenLabel
                size='small'
                variant='outlined'
                aria-label='Password*'
                placeholder='Password*'
              />
            </Grid>
          </Grid>
          <Button type='submit' fullWidth variant='contained' sx={{ mt: 3, mb: 2 }}>
            Sign Up
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default SignUp;
