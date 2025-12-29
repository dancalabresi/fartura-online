import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import { useAuth } from './contexts/AuthContext';

function AppContent() {
  const [currentPage, setCurrentPage] = useState<'home' | 'login' | 'admin'>('home');
  const { user } = useAuth();

  if (currentPage === 'login') {
    return (
      <LoginPage
        onBack={() => setCurrentPage('home')}
        onLoginSuccess={() => setCurrentPage('admin')}
      />
    );
  }

  if (currentPage === 'admin' && user) {
    return (
      <AdminDashboard onLogout={() => setCurrentPage('home')} />
    );
  }

  return (
    <HomePage onAdminClick={() => setCurrentPage('login')} />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
