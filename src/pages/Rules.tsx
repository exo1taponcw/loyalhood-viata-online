import { Shield, AlertTriangle, Users, Gavel, MessageSquare, Car } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const Rules = () => {
  const ruleCategories = [
    {
      icon: Shield,
      title: 'Reguli Generale',
      color: 'text-blue-400',
      bgColor: 'bg-blue-900/50',
      rules: [
        'Respectă toți jucătorii și staff-ul serverului',
        'Nu folosește limbaj vulgar sau discriminatoriu',
        'Nu face spam în chat sau în voicechat',
        'Nu distribui informații personale ale altor jucători',
        'Respectă regulile de roleplay în permanență'
      ]
    },
    {
      icon: Users,
      title: 'Roleplay',
      color: 'text-green-400',
      bgColor: 'bg-green-900/50',
      rules: [
        'Rămâi în caracter (IC) în timpul jocului',
        'Nu combina informațiile Out of Character cu In Character',
        'Respectă Fear RP - valorifică-ți viața de parcă ar fi reală',
        'Nu face PowerRP - permite altor jucători să reacționeze',
        'Dezvoltă-ți personajul în mod realist și consistent'
      ]
    },
    {
      icon: Car,
      title: 'Trafic și Vehicule',
      color: 'text-purple-400',
      bgColor: 'bg-purple-900/50',
      rules: [
        'Respectă regulile de circulație din joc',
        'Nu conduce ca în GTA Online - fii realist',
        'Nu face VDM (Vehicle Death Match)',
        'Parchează corect vehiculele',
        'Nu abandona vehiculele în locuri neautorizate'
      ]
    },
    {
      icon: Gavel,
      title: 'Combat și Conflicte',
      color: 'text-red-400',
      bgColor: 'bg-red-900/50',
      rules: [
        'Nu face RDM (Random Death Match)',
        'Inițiază roleplay înainte de conflict',
        'Nu reveni la locul morții (NLR - New Life Rule)',
        'Respectă timpul de recuperare după moarte',
        'Nu abuzezi sistemul de combat'
      ]
    },
    {
      icon: MessageSquare,
      title: 'Comunicare',
      color: 'text-yellow-400',
      bgColor: 'bg-yellow-900/50',
      rules: [
        'Folosește /ooc doar pentru situații urgente',
        'Nu întrerupe roleplay-ul altora fără motiv',
        'Vorbește clar în voicechat',
        'Nu folosi soundboard-uri sau modificări de voce',
        'Respectă ierarhia în organizații'
      ]
    },
    {
      icon: AlertTriangle,
      title: 'Interzis',
      color: 'text-orange-400',
      bgColor: 'bg-orange-900/50',
      rules: [
        'Hackingul, cheatingul sau exploatarea bug-urilor',
        'Crearea de conturi multiple (multiaccounting)',
        'Tranzacțiile cu bani reali pentru bunuri din joc',
        'Hărțuirea sau amenințările către alți jucători',
        'Promovarea altor servere sau comunități'
      ]
    }
  ];

  const penalties = [
    { offense: 'Încălcarea regulilor minore', penalty: 'Avertisment verbal' },
    { offense: 'Încălcarea repetată a regulilor', penalty: 'Kick temporar' },
    { offense: 'RDM/VDM/PowerRP', penalty: 'Ban 1-7 zile' },
    { offense: 'Hacking/Cheating', penalty: 'Ban permanent' },
    { offense: 'Hărțuire gravă', penalty: 'Ban permanent' }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <Shield className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Regulile Serverului
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            Pentru o experiență de roleplay plăcută pentru toți jucătorii
          </p>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-8 bg-gray-800">
        <div className="container mx-auto px-4">
          <Alert className="border-orange-600 bg-orange-900/20">
            <AlertTriangle className="h-4 w-4 text-orange-400" />
            <AlertDescription className="text-orange-300">
              <strong>Atenție:</strong> Necunoașterea regulilor nu scuză încălcarea lor. 
              Toți jucătorii sunt responsabili să cunoască și să respecte aceste reguli.
            </AlertDescription>
          </Alert>
        </div>
      </section>

      {/* Rules Categories */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ruleCategories.map((category, index) => (
              <Card key={index} className="bg-gray-700 border-gray-600 hover:shadow-lg transition-shadow duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-3">
                    <div className={`p-2 rounded-lg ${category.bgColor}`}>
                      <category.icon className={`w-6 h-6 ${category.color}`} />
                    </div>
                    <span className="text-xl font-bold text-white">
                      {category.title}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {category.rules.map((rule, ruleIndex) => (
                      <li key={ruleIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-gray-300">{rule}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Penalties Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            Sistemul de Penalizări
          </h2>
          <Card className="max-w-4xl mx-auto bg-gray-800 border-gray-600">
            <CardHeader>
              <CardTitle className="text-center text-xl text-white">
                Penalizări pentru Încălcarea Regulilor
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-gray-600">
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Încălcarea
                      </th>
                      <th className="text-left py-3 px-4 font-semibold text-white">
                        Penalizarea
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {penalties.map((item, index) => (
                      <tr key={index} className="border-b border-gray-600 hover:bg-gray-700">
                        <td className="py-3 px-4 text-gray-300">
                          {item.offense}
                        </td>
                        <td className="py-3 px-4">
                          <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                            item.penalty.includes('permanent') 
                              ? 'bg-red-900/50 text-red-300'
                              : item.penalty.includes('Ban') 
                              ? 'bg-orange-900/50 text-orange-300'
                              : 'bg-yellow-900/50 text-yellow-300'
                          }`}>
                            {item.penalty}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Appeal Process */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-8 text-white">
              Proces de Contestare
            </h2>
            <Card className="bg-gray-700 border-gray-600">
              <CardContent className="pt-6">
                <p className="text-gray-300 mb-4">
                  Dacă consideri că ai fost sancționat pe nedrept, poți contesta decizia:
                </p>
                <ol className="text-left space-y-2 max-w-2xl mx-auto">
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-gradient-primary text-white rounded-full flex items-center justify-center text-sm font-bold">1</span>
                    <span className="text-gray-300">Accesează forumul oficial al serverului</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-gradient-primary text-white rounded-full flex items-center justify-center text-sm font-bold">2</span>
                    <span className="text-gray-300">Creează un topic în secțiunea "Contestații"</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-gradient-primary text-white rounded-full flex items-center justify-center text-sm font-bold">3</span>
                    <span className="text-gray-300">Prezintă dovezi și explicații clare</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="w-6 h-6 bg-gradient-primary text-white rounded-full flex items-center justify-center text-sm font-bold">4</span>
                    <span className="text-gray-300">Așteaptă răspunsul din partea staff-ului</span>
                  </li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Rules;
