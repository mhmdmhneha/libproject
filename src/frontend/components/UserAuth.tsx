// src/frontend/components/UserAuth.tsx
import React, { useState } from 'react';
import { TextField, Typography, Button } from '@mui/material';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';

const UserAuth: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      console.log('User signed up successfully');
    } catch (error) {
      console.error('Error during sign up:', error);
    }
  };

  const handleSignIn = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      console.log('User signed in successfully');
    } catch (error) {
      console.error('Error during sign in:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', maxWidth: 300, margin: 'auto' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Sign Up / Sign In
      </Typography>
      <TextField
        label="Email"
        variant="outlined"
        value={email}
        onChange={e => setEmail(e.target.value)}
        margin="normal"
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        value={password}
        onChange={e => setPassword(e.target.value)}
        margin="normal"
      />
      <Button variant="contained" onClick={handleSignIn} style={{ marginTop: 16 }}>
        Sign In
      </Button>
      <Button variant="outlined" onClick={handleSignUp} style={{ marginTop: 8 }}>
        Sign Up
      </Button>
    </div>
  );
};

export default UserAuth;
