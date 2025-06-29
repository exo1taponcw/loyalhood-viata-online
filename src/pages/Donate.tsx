
import { Heart, Star, Crown, Zap, Check, CreditCard, Smartphone } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Donate = () => {
  const donationTiers = [
    {
      name: 'Supporter',
      price: '25 RON',
      icon: Heart,
      color: 'text-green-600',
      bgColor: 'bg-green-50',
      borderColor: 'border-green-200',
      benefits: [
        'Tag special în joc [Supporter]',
        'Acces la comenzi VIP',
        'Priority support',
        '50,000$ în joc',
        'Vehicul starter premium'
      ]
    },
    {
      name: 'VIP',
      price: '50 RON',
      icon: Star,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      popular: true,
      benefits: [
        'Toate beneficiile Supporter',
        'Tag special în joc [VIP]',
        'Acces la zone VIP',
        '150,000$ în joc',
        '2 vehicule premium',
        'Apartament VIP gratuit',
        'Skin-uri exclusive'
      ]
    },
    {
      name: 'Premium',
      price: '100 RON',
      icon: Crown,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50',
      borderColor: 'border-purple-200',
      benefits: [
        'Toate beneficiile VIP',
        'Tag special în joc [Premium]',
        'Acces complet la toate funcțiile',
        '500,000$ în joc',
        '5 vehicule premium',
        'Casa premium inclusă',
        'Acces la beta features',
        'Customizare personaj extinsă'
      ]
    }
  ];

  const oneTimePerks = [
    {
      name: 'Pachet de Bani',
      items: [
        { name: '100,000$', price: '15 RON' },
        { name: '250,000$', price: '30 RON' },
        { name: '500,000$', price: '50 RON' },
        { name: '1,000,000$', price: '85 RON' }
      ]
    },
    {
      name: 'Vehicule Premium',
      items: [
        { name: 'Lamborghini Huracán', price: '40 RON' },
        { name: 'BMW M3 Competition', price: '35 RON' },
        { name: 'Mercedes-AMG GT', price: '45 RON' },
        { name: 'Audi RS6 Avant', price: '38 RON' }
      ]
    }
  ];

  const paymentMethods = [
    { name: 'PayPal', icon: '💳', description: 'Plată securizată prin PayPal' },
    { name: 'Card Bancar', icon: '💳', description: 'Visa, MasterCard, American Express' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Heart className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Susține Serverul
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Ajută-ne să menținem cel mai bun server de roleplay din România
          </p>
        </div>
      </section>

      {/* Why Donate */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              De Ce să Donezi?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto">
              Donațiile tale ne ajută să menținem serverul online, să dezvoltăm funcționalități noi și să oferim cea mai bună experiență de roleplay.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Server Performant</h3>
                <p className="text-gray-600">Menține serverul cu performanțe de top și fără lag</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Star className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Funcționalități Noi</h3>
                <p className="text-gray-600">Dezvoltarea constantă de scripturi și funcționalități</p>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardContent className="pt-8">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Crown className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Suport Premium</h3>
                <p className="text-gray-600">Staff dedicat pentru o experiență perfectă</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Donation Tiers */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Pachete de Donație
            </h2>
            <p className="text-gray-600">
              Alege pachetul care ți se potrivește și primește beneficii exclusive
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {donationTiers.map((tier, index) => (
              <Card 
                key={index} 
                className={`relative hover:shadow-xl transition-all duration-300 ${tier.borderColor} ${
                  tier.popular ? 'border-2 scale-105' : 'border'
                }`}
              >
                {tier.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-gradient-primary text-white px-4 py-1">
                      Cel mai popular
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <div className={`w-16 h-16 ${tier.bgColor} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <tier.icon className={`w-8 h-8 ${tier.color}`} />
                  </div>
                  <CardTitle className="text-2xl font-bold text-gray-900">
                    {tier.name}
                  </CardTitle>
                  <div className="text-3xl font-bold text-purple-600">
                    {tier.price}
                  </div>
                </CardHeader>
                
                <CardContent>
                  <ul className="space-y-3 mb-8">
                    {tier.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-start space-x-3">
                        <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{benefit}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    className={`w-full ${tier.popular ? 'bg-gradient-primary' : ''} hover:shadow-lg transition-all duration-300`}
                    variant={tier.popular ? 'default' : 'outline'}
                  >
                    Donează Acum
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* One-time Perks */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Achiziții Individuale
            </h2>
            <p className="text-gray-600">
              Achiziționează doar ceea ce ai nevoie
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {oneTimePerks.map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-xl font-bold text-gray-900">
                    {category.name}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {category.items.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                        <span className="font-medium text-gray-900">{item.name}</span>
                        <div className="flex items-center space-x-3">
                          <span className="text-lg font-bold text-purple-600">{item.price}</span>
                          <Button size="sm" variant="outline">
                            Cumpără
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Methods */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Metode de Plată Securizate
            </h2>
            <p className="text-gray-600">
              Alege metoda de plată care îți convine
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {paymentMethods.map((method, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow text-center">
                <CardContent className="pt-8">
                  <div className="text-4xl mb-4">{method.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{method.name}</h3>
                  <p className="text-gray-600">{method.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="py-8 bg-yellow-50 border-y border-yellow-200">
        <div className="container mx-auto px-4 text-center">
          <p className="text-sm text-yellow-800">
            <strong>Notă importantă:</strong> Donațiile sunt voluntare și nu pot fi rambursate. 
            Toate achizițiile sunt pentru bunuri virtuale în cadrul jocului și nu au valoare în lumea reală.
          </p>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Donate;
