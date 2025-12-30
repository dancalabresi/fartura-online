import { useState, useEffect } from 'react';
import { ArrowLeft, MapPin, Phone, MessageCircle, Loader2 } from 'lucide-react';
import { supabase } from '../lib/supabase';

interface CategoryPageProps {
  categorySlug: string;
  onBack: () => void;
}

interface Business {
  id: string;
  name: string;
  address: string;
  phone: string;
  whatsapp: string | null;
  description: string | null;
  is_featured: boolean;
}

interface Category {
  id: string;
  name: string;
  icon: string;
}

export default function CategoryPage({ categorySlug, onBack }: CategoryPageProps) {
  const [category, setCategory] = useState<Category | null>(null);
  const [businesses, setBusinesses] = useState<Business[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCategoryAndBusinesses();
  }, [categorySlug]);

  async function loadCategoryAndBusinesses() {
    try {
      setLoading(true);

      const { data: categoryData, error: categoryError } = await supabase
        .from('categories')
        .select('*')
        .eq('slug', categorySlug)
        .maybeSingle();

      if (categoryError) throw categoryError;
      if (!categoryData) {
        console.error('Category not found');
        return;
      }

      setCategory(categoryData);

      const { data: businessData, error: businessError } = await supabase
        .from('businesses')
        .select('*')
        .eq('category_id', categoryData.id)
        .eq('is_active', true)
        .order('is_featured', { ascending: false })
        .order('name');

      if (businessError) throw businessError;
      setBusinesses(businessData || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  }

  function handlePhoneClick(phone: string) {
    window.location.href = `tel:${phone}`;
  }

  function handleWhatsAppClick(phone: string) {
    const cleanPhone = phone.replace(/\D/g, '');
    window.open(`https://wa.me/55${cleanPhone}`, '_blank');
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Loader2 className="animate-spin text-green-600" size={48} />
      </div>
    );
  }

  if (!category) {
    return (
      <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
        <p className="text-gray-600 mb-4">Categoria não encontrada</p>
        <button
          onClick={onBack}
          className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Voltar
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-green-600 text-white py-6 sticky top-0 z-10 shadow-md">
        <div className="max-w-3xl mx-auto px-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 mb-4 hover:text-green-100 transition-colors"
          >
            <ArrowLeft size={20} />
            <span>Voltar</span>
          </button>
          <h1 className="text-3xl font-bold">{category.name}</h1>
          <p className="text-green-50 mt-1">
            {businesses.length} {businesses.length === 1 ? 'estabelecimento' : 'estabelecimentos'}
          </p>
        </div>
      </header>

      <main className="max-w-3xl mx-auto px-4 py-6">
        {businesses.length === 0 ? (
          <div className="bg-white rounded-xl p-8 text-center shadow-md">
            <p className="text-gray-600">
              Nenhum estabelecimento cadastrado nesta categoria ainda.
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {businesses.map((business) => (
              <div
                key={business.id}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow ${
                  business.is_featured ? 'ring-2 ring-orange-400' : ''
                }`}
              >
                {business.is_featured && (
                  <div className="inline-block bg-orange-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-3">
                    PATROCINADO
                  </div>
                )}

                <h2 className="text-xl font-bold text-gray-900 mb-2">{business.name}</h2>

                {business.description && (
                  <p className="text-gray-600 mb-3">{business.description}</p>
                )}

                <div className="flex items-start gap-2 text-gray-700 mb-4">
                  <MapPin size={18} className="flex-shrink-0 mt-1" />
                  <p>{business.address}</p>
                </div>

                <div className="flex gap-2">
                  <button
                    onClick={() => handlePhoneClick(business.phone)}
                    className="flex-1 bg-green-600 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-700 transition-colors"
                  >
                    <Phone size={18} />
                    Ligar
                  </button>

                  {business.whatsapp && (
                    <button
                      onClick={() => handleWhatsAppClick(business.whatsapp!)}
                      className="flex-1 bg-green-500 text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center gap-2 hover:bg-green-600 transition-colors"
                    >
                      <MessageCircle size={18} />
                      WhatsApp
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
