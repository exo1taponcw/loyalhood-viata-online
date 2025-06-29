
import { Calendar, Clock, MapPin, Users, Trophy } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Events = () => {
  const upcomingEvents = [
    {
      id: 1,
      title: 'Cursă Ilegală pe Highway',
      description: 'Cea mai mare cursă ilegală a lunii cu premii în valoare de $500,000',
      date: '2025-01-20',
      time: '20:00',
      location: 'Highway LS',
      participants: '45/64',
      prize: '$500,000',
      type: 'Cursă',
      status: 'upcoming'
    },
    {
      id: 2,
      title: 'Turneu de Poker Casino',
      description: 'Demonstrează-ți abilitățile la poker în cel mai mare turneu al anului',
      date: '2025-01-22',
      time: '19:30',
      location: 'Diamond Casino',
      participants: '28/32',
      prize: '$750,000',
      type: 'Casino',
      status: 'upcoming'
    },
    {
      id: 3,
      title: 'Operațiune Poliție vs Mafie',
      description: 'Eveniment special de roleplay cu implicarea tuturor facțiunilor',
      date: '2025-01-25',
      time: '21:00',
      location: 'Întreg orașul',
      participants: '∞',
      prize: 'Respect & Fame',
      type: 'Roleplay',
      status: 'upcoming'
    }
  ];

  const eventTypes = [
    { name: 'Cursă', color: 'bg-red-500', count: 15 },
    { name: 'Casino', color: 'bg-yellow-500', count: 8 },
    { name: 'Roleplay', color: 'bg-green-500', count: 12 },
    { name: 'Competiție', color: 'bg-blue-500', count: 6 },
    { name: 'Aventură', color: 'bg-purple-500', count: 9 }
  ];

  const getEventTypeColor = (type: string) => {
    const colors: { [key: string]: string } = {
      'Cursă': 'bg-red-900/50 text-red-300',
      'Casino': 'bg-yellow-900/50 text-yellow-300',
      'Roleplay': 'bg-green-900/50 text-green-300',
      'Competiție': 'bg-blue-900/50 text-blue-300',
      'Aventură': 'bg-purple-900/50 text-purple-300'
    };
    return colors[type] || 'bg-gray-900/50 text-gray-300';
  };

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Calendar className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Evenimente Server
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Participă la evenimente exclusive și câștigă premii valoroase
          </p>
        </div>
      </section>

      {/* Event Types Stats */}
      <section className="py-12 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {eventTypes.map((type, index) => (
              <Card key={index} className="text-center hover:shadow-lg transition-shadow bg-gray-700 border-gray-600">
                <CardContent className="pt-6">
                  <div className={`w-12 h-12 ${type.color} rounded-full flex items-center justify-center mx-auto mb-3`}>
                    <span className="text-white font-bold text-lg">{type.count}</span>
                  </div>
                  <p className="font-semibold text-white">{type.name}</p>
                  <p className="text-sm text-gray-300">Evenimente</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Evenimente Viitoare
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
            {upcomingEvents.map((event) => (
              <Card key={event.id} className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500 bg-gray-800 border-gray-600">
                <CardHeader>
                  <div className="flex justify-between items-start mb-2">
                    <Badge className={getEventTypeColor(event.type)}>
                      {event.type}
                    </Badge>
                    <Badge variant="outline" className="text-green-400 border-green-400 bg-green-900/20">
                      Activ
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-bold text-white">
                    {event.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300 mb-4">
                    {event.description}
                  </p>
                  
                  <div className="space-y-3 mb-6">
                    <div className="flex items-center text-sm text-gray-300">
                      <Calendar className="w-4 h-4 mr-2 text-purple-400" />
                      {new Date(event.date).toLocaleDateString('ro-RO')}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Clock className="w-4 h-4 mr-2 text-blue-400" />
                      {event.time}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <MapPin className="w-4 h-4 mr-2 text-red-400" />
                      {event.location}
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Users className="w-4 h-4 mr-2 text-green-400" />
                      {event.participants} participanți
                    </div>
                    <div className="flex items-center text-sm text-gray-300">
                      <Trophy className="w-4 h-4 mr-2 text-yellow-400" />
                      Premiu: {event.prize}
                    </div>
                  </div>
                  
                  <Button className="w-full bg-gradient-primary hover:shadow-lg transition-all duration-300">
                    Înscrie-te la Eveniment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Event Rules */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              Reguli Evenimente
            </h2>
            
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="pt-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Reguli Generale</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Respectă toate regulile serverului</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Fair-play obligatoriu la toate evenimentele</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Înscrierea se face în avans</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Prezența obligatorie la ora stabilită</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-4 text-white">Premii & Recompense</h3>
                    <ul className="space-y-2 text-gray-300">
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Premiile sunt acordate automat</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Locul 1-3 primesc recompense</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Toți participanții primesc XP bonus</span>
                      </li>
                      <li className="flex items-start space-x-2">
                        <span className="w-2 h-2 bg-green-500 rounded-full mt-2 flex-shrink-0"></span>
                        <span>Evenimente speciale au premii unice</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Events;
