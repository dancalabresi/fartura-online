import { useState } from 'react';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import AdminDashboard from './pages/AdminDashboard';
import CategoryPage from './pages/CategoryPage';
import { useAuth } from './contexts/AuthContext';

type Page =
  | { type: 'home' }
  | { type: 'login' }
  | { type: 'admin' }
  | { type: 'category'; slug: string };

function AppContent() {
  const [currentPage, setCurrentPage] = useState<Page>({ type: 'home' });
  const { user } = useAuth();

  if (currentPage.type === 'login') {
    return (
      <LoginPage
        onBack={() => setCurrentPage({ type: 'home' })}
        onLoginSuccess={() => setCurrentPage({ type: 'admin' })}
      />
    );
  }

  if (currentPage.type === 'admin' && user) {
    return (
      <AdminDashboard onLogout={() => setCurrentPage({ type: 'home' })} />
    );
  }

  if (currentPage.type === 'category') {
    return (
      <CategoryPage
        categorySlug={currentPage.slug}
        onBack={() => setCurrentPage({ type: 'home' })}
      />
    );
  }

  return (
    <HomePage
      onAdminClick={() => setCurrentPage({ type: 'login' })}
      onCategoryClick={(slug) => setCurrentPage({ type: 'category', slug })}
    />
  );
}

export default function App() {
  return (
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  );
}
