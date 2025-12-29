import { LogOut, MapPin } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

interface AdminDashboardProps {
  onLogout: () => void;
}

export default function AdminDashboard({ onLogout }: AdminDashboardProps) {
  const { signOut } = useAuth();

  const handleLogout = async () => {
    await signOut();
    onLogout();
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <MapPin className="text-green-600" size={28} />
              <h1 className="text-xl font-bold text-gray-800">Fartura Online - Admin</h1>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-sm font-semibold text-red-600 hover:bg-red-50 rounded-lg transition-colors"
            >
              <LogOut size={18} />
              Sair
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Painel Administrativo
          </h2>
          <p className="text-gray-600 mb-8">
            Bem-vindo ao painel de administração do Fartura Online Local Guide.
          </p>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-green-50 rounded-lg p-6 border border-green-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Estabelecimentos</h3>
              <p className="text-3xl font-bold text-green-600">0</p>
              <p className="text-sm text-gray-600 mt-2">Total cadastrados</p>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Avaliações</h3>
              <p className="text-3xl font-bold text-blue-600">0</p>
              <p className="text-sm text-gray-600 mt-2">Total de avaliações</p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border border-yellow-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Usuários</h3>
              <p className="text-3xl font-bold text-yellow-600">1</p>
              <p className="text-sm text-gray-600 mt-2">Administradores</p>
            </div>
          </div>

          <div className="mt-8 p-6 bg-gray-50 rounded-lg">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Ações Rápidas</h3>
            <div className="space-y-3">
              <button className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Adicionar Novo Estabelecimento
              </button>
              <button className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Gerenciar Categorias
              </button>
              <button className="w-full text-left px-4 py-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors">
                Ver Relatórios
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
