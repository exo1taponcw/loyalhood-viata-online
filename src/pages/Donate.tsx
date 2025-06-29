
import { Heart, Shield, Zap, Crown, CreditCard, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Donate = () => {
  const donationPackages = [
    {
      id: 1,
      name: 'Pachet Starter',
      price: '25 RON',
      description: 'Perfectul pentru începători',
      features: [
        'Vehicul personal starter',
        '1x Restart character',
        'Acces prioritar pe server',
        'Tag special în chat'
      ],
      popular: false,
      color: 'from-blue-500 to-purple-500'
    },
    {
      id: 2,
      name: 'Pachet Premium',
      price: '50 RON',
      description: 'Cel mai popular pachet',
      features: [
        'Vehicul premium la alegere',
        '3x Restart character',
        'Acces VIP pe server',
        'Tag VIP în chat',
        'Acces în zone exclusive'
      ],
      popular: true,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: 3,
      name: 'Pachet Elite',
      price: '100 RON',
      description: 'Pentru jucătorii dedicați',
      features: [
        'Orice vehicul din joc',
        '5x Restart character',
        'Acces Elite pe server',
        'Tag Elite personalizat',
        'Acces în toate zonele VIP',
        'Suport prioritar'
      ],
      popular: false,
      color: 'from-yellow-500 to-orange-500'
    }
  ];

  const perks = [
    {
      icon: Shield,
      title: 'Suport pentru Server',
      description: 'Ajută la menținerea și îmbunătățirea serverului'
    },
    {
      icon: Zap,
      title: 'Beneficii Exclusive',
      description: 'Acces la conținut și funcții premium'
    },
    {
      icon: Crown,
      title: 'Status Special',
      description: 'Recunoaștere în comunitate pentru susținere'
    }
  ];

  const paymentMethods = [
    { name: 'PayPal', icon: CreditCard, description: 'Plată sigură prin PayPal' },
    { name: 'Card', icon: CreditCard, description: 'Visa, Mastercard, American Express' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Susține Serverul
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Donațiile tale ajută la menținerea și dezvoltarea serverului LoyalHOOD Roleplay
          </p>
        </div>
      </section>

      {/* Why Donate Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            De Ce să Donezi?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {perks.map((perk, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <perk.icon className="w-8 h-8 text-white" />
                  </div>
                  <CardTitle className="text-xl text-white">{perk.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-300">{perk.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Packages */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Pachete de Donații
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {donationPackages.map((pkg) => (
              <Card 
                key={pkg.id} 
                className={`relative bg-gray-800 border-gray-600 hover:shadow-xl transition-all duration-300 ${
                  pkg.popular ? 'ring-2 ring-purple-500 scale-105' : ''
                }`}
              >
                {pkg.popular && (
                  <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-purple-600 text-white">
                    Cel mai popular
                  </Badge>
                )}
                <CardHeader className="text-center">
                  <div className={`w-20 h-20 bg-gradient-to-r ${pkg.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <Crown className="w-10 h-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl font-bold text-white">{pkg.name}</CardTitle>
                  <div className="text-3xl font-bold text-purple-400 mb-2">{pkg.price}</div>
                  <p className="text-gray-300">{pkg.description}</p>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3 mb-6">
                    {pkg.features.map((feature, index) => (
                      <li key={index} className="flex items-center text-gray-300">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 flex-shrink-0"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full bg-gradient-to-r ${pkg.color} hover:shadow-lg transition-all duration-300 text-white font-semibold`}
                  >
                    Donează Acum
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 text-white">
            Metode de Plată Sigure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 hover:shadow-lg transition-shadow">
                <CardContent className="flex items-center p-6">
                  <method.icon className="w-8 h-8 text-purple-400 mr-4" />
                  <div>
                    <h3 className="font-semibold text-lg text-white">{method.name}</h3>
                    <p className="text-gray-300 text-sm">{method.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Întrebări Frecvente
          </h2>
          
          <div className="max-w-3xl mx-auto space-y-6">
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">Cât timp durează să primesc beneficiile?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Beneficiile sunt acordate automat în maxim 30 de minute după confirmarea plății.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">Pot refuza o donație?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Donațiile sunt finale și nu pot fi rambursate, cu excepția problemelor tehnice.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gray-800 border-gray-600">
              <CardHeader>
                <CardTitle className="text-white">Beneficiile sunt permanente?</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300">
                  Da, toate beneficiile sunt permanente pe durata existenței contului tău.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
