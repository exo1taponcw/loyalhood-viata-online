
import { Shield, Users, Zap, Trophy, Clock, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ServerStats from '@/components/ServerStats';

const ServerInfo = () => {
  const serverFeatures = [
    {
      icon: Shield,
      title: 'Sistem Anti-Cheat',
      description: 'Protecție avansată împotriva hackerilor și cheaterilor'
    },
    {
      icon: Users,
      title: 'Whitelist System',
      description: 'Accesul pe server se face doar prin aplicație aprobată'
    },
    {
      icon: Zap,
      title: 'VRP Framework',
      description: 'Cel mai avansat sistem de roleplay disponibil'
    },
    {
      icon: Trophy,
      title: 'Sistem de Recompense',
      description: 'Câștigă premii pentru activitate și roleplay de calitate'
    }
  ];

  const jobs = [
    'Polițist', 'Medic', 'Mecanic', 'Taximetrist', 'Jurnalist',
    'Avocat', 'Judecător', 'Bancher', 'Agent Imobiliar', 'Pilot',
    'Bodyguard', 'DJ', 'Barman', 'Chef', 'Fermier'
  ];

  const factions = [
    { name: 'Poliția Los Santos', members: '45/50', status: 'Recrutează' },
    { name: 'Los Santos Medical', members: '38/40', status: 'Recrutează' },
    { name: 'Mafie Italiană', members: '28/30', status: 'Închis' },
    { name: 'Ballas Gang', members: '22/25', status: 'Recrutează' },
    { name: 'Los Santos Customs', members: '35/35', status: 'Complet' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Informații Server
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Descoperă toate detaliile despre serverul LoyalHOOD Roleplay
          </p>
        </div>
      </section>

      {/* Server Stats */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Statistici Live
          </h2>
          <ServerStats />
        </div>
      </section>

      {/* Server Details */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Detalii Tehnice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Server className="w-5 h-5 mr-2 text-purple-600" />
                      Server IP
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-mono text-lg">92.115.19.173</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Users className="w-5 h-5 mr-2 text-blue-600" />
                      Capacitate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">128 Jucători</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Zap className="w-5 h-5 mr-2 text-yellow-600" />
                      Framework
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">VRP 2025</p>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-green-600" />
                      Uptime
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg">99.9%</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-gray-900">
                Caracteristici Server
              </h2>
              <div className="space-y-6">
                {serverFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Jobs Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Joburi Disponibile
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {jobs.map((job, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-white border border-purple-200 hover:bg-purple-50 transition-colors"
              >
                {job}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Factions Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
            Facțiuni Active
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {factions.map((faction, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{faction.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Membri: {faction.members}</span>
                    <Badge 
                      variant={faction.status === 'Recrutează' ? 'default' : 
                              faction.status === 'Complet' ? 'secondary' : 'destructive'}
                    >
                      {faction.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServerInfo;
