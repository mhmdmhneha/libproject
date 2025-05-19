// src/frontend/components/MainApp.tsx
import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { User, signOut }           from 'firebase/auth';
import { auth }                    from '../firebase';
import { useNavigate }             from 'react-router-dom';

interface MainAppProps {
  user: User;
}

export default function MainApp({ user }: MainAppProps) {
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut(auth);
    navigate('/auth', { replace: true });
  };

  return (
    <Box sx={{ p: 4, textAlign: 'center' }}>
      <Typography variant="h4" gutterBottom>
        Hello, {user.email}
      </Typography>
      <Typography sx={{ mb: 2 }}>
        Welcome to the protected part of your app.
      </Typography>
      <Button variant="outlined" onClick={handleSignOut}>
        Sign Out
      </Button>
    </Box>
  );
}
