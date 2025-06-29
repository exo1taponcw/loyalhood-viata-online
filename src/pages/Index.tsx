
import { useState } from 'react';
import { Play, Users, Trophy, Zap, ArrowRight, Copy, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import NewsSection from '@/components/NewsSection';

const Index = () => {
  const [copied, setCopied] = useState(false);
  const navigate = useNavigate();
  
  const copyServerIP = () => {
    navigator.clipboard.writeText('92.115.19.173');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const connectToServer = () => {
    // FiveM connection URL format
    window.location.href = 'fivem://connect/92.115.19.173';
  };

  const goToRules = () => {
    navigate('/rules');
  };

  const features = [
    {
      icon: Users,
      title: 'Comunitate Activă',
      description: 'Peste 1000 de jucători activi cu experiențe de roleplay autentice'
    },
    {
      icon: Trophy,
      title: 'Evenimente Zilnice',
      description: 'Competiții, cursuri și misiuni speciale cu premii valoroase'
    },
    {
      icon: Zap,
      title: 'VRP Framework',
      description: 'Cel mai avansat sistem de roleplay cu funcționalități unice'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900">
      <Header />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-hero-pattern">
        <div className="absolute inset-0 hero-gradient opacity-90"></div>
        <div className="relative z-10 container mx-auto px-4 text-center text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              LoyalHOOD
              <span className="block text-3xl md:text-4xl font-normal mt-2 opacity-90">
                Roleplay Server
              </span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90">
              Cel mai autentic server de roleplay din România. Alătură-te comunității noastre și trăiește experiențe unice în Los Santos.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                size="lg" 
                className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4 text-lg"
                onClick={connectToServer}
              >
                <Play className="w-5 h-5 mr-2" />
                Începe să Joci
              </Button>
              
              <div className="flex items-center space-x-2 bg-white/20 backdrop-blur-sm rounded-lg px-4 py-3">
                <span className="text-sm font-medium">IP Server:</span>
                <code className="font-mono text-lg">92.115.19.173</code>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copyServerIP}
                  className="text-white hover:bg-white/20 p-2"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-white">
              De Ce LoyalHOOD?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Descoperă caracteristicile care ne fac cel mai bun server de roleplay din România
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-gray-700 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in text-center"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* News Section */}
      <NewsSection />

      {/* CTA Section */}
      <section className="py-16 bg-gradient-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Gata să Începi Aventura?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Alătură-te comunității LoyalHOOD și trăiește cea mai autentică experiență de roleplay
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              className="bg-white text-purple-600 hover:bg-gray-100 font-semibold px-8 py-4"
              onClick={connectToServer}
            >
              Conectează-te Acum
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-purple-600 px-8 py-4"
              onClick={goToRules}
            >
              Vezi Regulile
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
