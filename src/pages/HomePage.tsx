import { MapPin, Search, Plus, MessageCircle, Phone, Car, Pill, ShoppingCart, Apple, Coffee, Utensils, PhoneCall, Wrench, Megaphone, Star } from 'lucide-react';

interface HomePageProps {
  onAdminClick: () => void;
}

export default function HomePage({ onAdminClick }: HomePageProps) {
  const categories = [
    { name: 'Táxi', icon: Car },
    { name: 'Farmácias', icon: Pill },
    { name: 'Mercados', icon: ShoppingCart },
    { name: 'Quitandas', icon: Apple },
    { name: 'Lanchonetes', icon: Coffee },
    { name: 'Restaurantes', icon: Utensils },
    { name: 'Emergência', icon: PhoneCall },
    { name: 'Serviços', icon: Wrench },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white py-6">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MapPin size={32} />
            <h1 className="text-3xl font-bold">Fartura Online</h1>
          </div>
          <p className="text-green-50">Telefones, Serviços e Comércio Local</p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 pb-8">
        <div className="relative -mt-4 mb-6">
          <div className="bg-white rounded-lg shadow-md p-4 flex items-center gap-3">
            <Search className="text-gray-400" size={20} />
            <input
              type="text"
              placeholder="Buscar estabelecimento, serviço ou categoria..."
              className="flex-1 outline-none text-gray-700 placeholder-gray-400"
            />
          </div>
        </div>

        <div className="bg-red-500 text-white rounded-2xl p-6 mb-8 shadow-lg">
          <div className="flex items-start gap-4 mb-4">
            <div className="bg-white rounded-full p-3">
              <Plus className="text-red-500" size={24} />
            </div>
            <div>
              <h2 className="text-2xl font-bold mb-1">Farmácia de Plantão</h2>
              <p className="text-red-100 text-sm">27/12/2025 a 02/01/2026</p>
            </div>
          </div>

          <h3 className="text-xl font-bold mb-2">Farmácia Nossa Senhora de Fátima</h3>
          <div className="flex items-center gap-2 mb-4">
            <MapPin size={18} />
            <p className="text-red-50">Av. João Rocha de Andrade, 557 - Distrito Industrial</p>
          </div>

          <button className="w-full bg-white text-red-500 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-red-50 transition-colors">
            <MessageCircle size={20} />
            <Phone size={20} />
            <span>14997237828</span>
          </button>
        </div>

        <h2 className="text-2xl font-bold text-gray-900 mb-6">Categorias</h2>

        <div className="grid grid-cols-2 gap-4 mb-8">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.name}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow flex flex-col items-center gap-3"
              >
                <div className="bg-green-100 rounded-full p-4">
                  <Icon className="text-green-600" size={32} />
                </div>
                <span className="text-gray-900 font-semibold">{category.name}</span>
              </button>
            );
          })}
        </div>

        <div className="bg-orange-500 text-white rounded-2xl p-6 shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <Megaphone size={32} />
            <h2 className="text-2xl font-bold">Anuncie Seu Negócio!</h2>
          </div>

          <div className="space-y-2 mb-6">
            <div className="flex items-start gap-2">
              <Star className="text-orange-200 mt-1 flex-shrink-0" size={18} />
              <p className="text-orange-50">Destaque seu negócio para milhares de pessoas em Fartura-SP!</p>
            </div>
            <div className="flex items-start gap-2">
              <Star className="text-orange-200 mt-1 flex-shrink-0" size={18} />
              <p className="text-orange-50">Apareça no topo das buscas e ganhe mais clientes</p>
            </div>
            <div className="flex items-start gap-2">
              <Star className="text-orange-200 mt-1 flex-shrink-0" size={18} />
              <p className="text-orange-50">Cadastro rápido e gratuito - Anúncios patrocinados disponíveis</p>
            </div>
          </div>

          <button className="w-full bg-white text-orange-500 font-bold py-3 px-6 rounded-lg flex items-center justify-center gap-2 hover:bg-orange-50 transition-colors mb-3">
            <MessageCircle size={20} />
            <span>Fale Conosco no WhatsApp</span>
          </button>

          <p className="text-center text-orange-100">(14) 99689-2074</p>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <p className="font-semibold mb-1">Fartura Online - Guia completo da cidade</p>
          <p className="text-gray-400 text-sm">Encontre telefones e serviços rapidamente</p>
        </div>
      </footer>

      <button
        onClick={onAdminClick}
        className="fixed bottom-4 right-4 bg-green-600 text-white px-4 py-2 rounded-full shadow-lg hover:bg-green-700 transition-colors text-sm font-semibold"
      >
        Admin
      </button>
    </div>
  );
}
