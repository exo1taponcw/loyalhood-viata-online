
import { Shield, Users, Zap, Trophy, Clock, Server } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

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

  return (
    <div className="min-h-screen bg-gray-900">
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

      {/* Server Details */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">
                Detalii Tehnice
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Server className="w-5 h-5 mr-2 text-purple-400" />
                      Server IP
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-mono text-lg text-gray-300">92.115.19.173</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Users className="w-5 h-5 mr-2 text-blue-400" />
                      Capacitate
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-300">128 Jucători</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Zap className="w-5 h-5 mr-2 text-yellow-400" />
                      Framework
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-300">VRP 2025</p>
                  </CardContent>
                </Card>
                
                <Card className="bg-gray-700 border-gray-600">
                  <CardHeader>
                    <CardTitle className="flex items-center text-white">
                      <Clock className="w-5 h-5 mr-2 text-green-400" />
                      Uptime
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-lg text-gray-300">99.9%</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold mb-8 text-white">
                Caracteristici Server
              </h2>
              <div className="space-y-6">
                {serverFeatures.map((feature, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-gray-700 rounded-lg">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <feature.icon className="w-6 h-6 text-white" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-white mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-gray-300">
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
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Joburi Disponibile
          </h2>
          <div className="flex flex-wrap gap-3 justify-center">
            {jobs.map((job, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-gray-700 border border-purple-500 text-white hover:bg-purple-600 transition-colors"
              >
                {job}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default ServerInfo;
