// src/frontend/components/UserAuth.tsx
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Typography, Button, Alert, Box } from '@mui/material';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  User
} from 'firebase/auth';
import { doc, setDoc, serverTimestamp } from 'firebase/firestore';
import { auth, db } from '../firebase';

const UserAuth: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail]           = useState('');
  const [password, setPassword]     = useState('');
  const [error, setError]           = useState<string | null>(null);
  const [user, setUser]             = useState<User | null>(null);

  // Listen for auth state changes
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, u => {
      setUser(u);
      // if user is already signed in (e.g. returning), redirect immediately
      if (u) navigate('/dashboard', { replace: true });
    });
    return unsubscribe;
  }, [navigate]);

  // Sign-up handler (writes to Firestore)
  const handleSignUp = async () => {
    setError(null);
    try {
      const { user: newUser } = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', newUser.uid), {
        email:     newUser.email,
        createdAt: serverTimestamp(),
      });
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      if (err.code === 'auth/email-already-in-use') {
        setError('That email is already registered.');
      } else if (err.code === 'auth/weak-password') {
        setError('Password should be at least 6 characters.');
      } else {
        setError('Failed to sign up. Try again.');
      }
    }
  };

  // Sign-in handler
  const handleSignIn = async () => {
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/dashboard', { replace: true });
    } catch (err: any) {
      if (err.code === 'auth/user-not-found' || err.code === 'auth/wrong-password') {
        setError('Email or password incorrect.');
      } else {
        setError('Failed to sign in. Try again.');
      }
    }
  };

  // Sign-out handler (in case you render sign-out here)
  const handleSignOut = async () => {
    await signOut(auth);
    setEmail('');
    setPassword('');
    setError(null);
  };

  // If signed in, we immediate navigate; we can also render a quick fallback
  if (user) {
    return (
      <Box sx={{ p: 4, textAlign: 'center' }}>
        <Typography>✔️ Redirecting…</Typography>
      </Box>
    );
  }

  // Otherwise show sign-up / sign-in form
  return (
    <Box sx={{ maxWidth: 360, mx: 'auto', mt: 4 }}>
      <Typography variant="h5" gutterBottom>
        Sign Up / Sign In
      </Typography>
      {error && <Alert severity="error" sx={{ mb: 2 }}>{error}</Alert>}
      <TextField
        label="Email"
        type="email"
        fullWidth
        value={email}
        onChange={e => setEmail(e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        fullWidth
        value={password}
        onChange={e => setPassword(e.target.value)}
        sx={{ mb: 3 }}
      />
      <Button
        variant="contained"
        fullWidth
        onClick={handleSignUp}
        sx={{ mb: 1 }}
      >
        Sign Up
      </Button>
      <Button variant="outlined" fullWidth onClick={handleSignIn}>
        Sign In
      </Button>
    </Box>
  );
};

export default UserAuth;
