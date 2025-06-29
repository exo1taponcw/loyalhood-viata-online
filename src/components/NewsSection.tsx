
import { Calendar, User, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const NewsSection = () => {
  const news = [
    {
      id: 1,
      title: 'Actualizare Majoră VRP Framework 2025',
      excerpt: 'Noi funcționalități adăugate pentru o experiență de roleplay îmbunătățită...',
      date: '2025-01-15',
      author: 'Admin LoyalHOOD',
      category: 'Actualizări'
    },
    {
      id: 2,
      title: 'Eveniment Special: Cursă de Strada',
      excerpt: 'Participă la cea mai mare cursă de stradă din Los Santos. Premii în valoare de $500,000...',
      date: '2025-01-10',
      author: 'Event Team',
      category: 'Evenimente'
    },
    {
      id: 3,
      title: 'Noul Sistem de Joburi',
      excerpt: 'Descoperă noile joburi disponibile: Pilot, Medic de Urgență, Agent Imobiliar...',
      date: '2025-01-08',
      author: 'Dev Team',
      category: 'Funcționalități'
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Ultimele Noutăți
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Rămâi la curent cu cele mai recente actualizări, evenimente și anunțuri de pe serverul nostru
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {news.map((article, index) => (
            <Card key={article.id} className="hover:shadow-xl transition-all duration-300 animate-fade-in">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="px-3 py-1 bg-gradient-primary text-white text-xs font-medium rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-500 text-xs">
                    <Calendar className="w-3 h-3 mr-1" />
                    {new Date(article.date).toLocaleDateString('ro-RO')}
                  </div>
                </div>
                <CardTitle className="text-lg font-bold text-gray-900 line-clamp-2">
                  {article.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {article.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-sm text-gray-500">
                    <User className="w-4 h-4 mr-1" />
                    {article.author}
                  </div>
                  <Button variant="ghost" size="sm" className="text-purple-600 hover:text-purple-800">
                    Citește mai mult
                    <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-gradient-primary hover:shadow-lg transition-all duration-300">
            Vezi Toate Noutățile
            <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;
