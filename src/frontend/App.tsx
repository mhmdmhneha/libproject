// src/frontend/App.tsx
import React, { useEffect, useState } from 'react';
import { Routes, Route, Navigate }      from 'react-router-dom';
import { onAuthStateChanged, User }     from 'firebase/auth';
import { auth }                         from './firebase';
import UserAuth                         from './components/UserAuth';
import MainApp                          from './components/MainApp';

export default function App() {
  const [user, setUser]     = useState<User|null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, u => {
      setUser(u);
      setLoading(false);
    });
    return unsub;
  }, []);

  if (loading) {
    return <div>Loading…</div>;
  }

  return (
    <Routes>
      <Route
        path="/auth"
        element={!user ? <UserAuth /> : <Navigate to="/dashboard" replace />}
      />
      <Route
        path="/dashboard"
        element={ user ? <MainApp user={user}/> : <Navigate to="/auth" replace /> }
      />
      <Route
        path="*"
        element={<Navigate to={user ? '/dashboard' : '/auth'} replace />}
      />
    </Routes>
  );
}
