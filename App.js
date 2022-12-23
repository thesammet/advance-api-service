import React from 'react'
import { AuthProvider } from './src/context/Auth';
import Navigation from './src/navigation/index';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
    </AuthProvider>
  )
}