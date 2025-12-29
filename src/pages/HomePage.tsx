import { MapPin, Utensils, Coffee, ShoppingBag, Star } from 'lucide-react';

interface HomePageProps {
  onAdminClick: () => void;
}

export default function HomePage({ onAdminClick }: HomePageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      <nav className="bg-white shadow-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <MapPin className="text-green-600" size={28} />
              <h1 className="text-xl font-bold text-gray-800">Fartura Online</h1>
            </div>
            <button
              onClick={onAdminClick}
              className="px-4 py-2 text-sm font-semibold text-green-600 hover:bg-green-50 rounded-lg transition-colors"
            >
              Admin
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Descubra os Melhores Lugares de Fartura
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Seu guia completo para restaurantes, cafés e comércio local
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Utensils className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Restaurantes</h3>
            <p className="text-gray-600">
              Explore os melhores restaurantes da região com avaliações e fotos
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <Coffee className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Cafés</h3>
            <p className="text-gray-600">
              Encontre os cafés mais aconchegantes para um momento especial
            </p>
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
            <div className="bg-green-100 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <ShoppingBag className="text-green-600" size={24} />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">Comércio Local</h3>
            <p className="text-gray-600">
              Apoie o comércio local descobrindo lojas únicas e especiais
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-lg p-8">
          <div className="flex items-center gap-2 mb-6">
            <Star className="text-yellow-500" size={28} />
            <h3 className="text-2xl font-bold text-gray-900">Destaques da Semana</h3>
          </div>
          <p className="text-gray-600 text-center py-8">
            Em breve você encontrará aqui os estabelecimentos mais bem avaliados da região!
          </p>
        </div>
      </main>

      <footer className="bg-gray-800 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="text-center">
            <p className="text-gray-300">
              © 2024 Fartura Online. Todos os direitos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
