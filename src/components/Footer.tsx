
import { Server, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
                <Server className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold">LoyalHOOD Roleplay</h3>
                <p className="text-sm text-gray-400">VRP Framework 2025</p>
              </div>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Cel mai autentic server de roleplay din România. Alătură-te comunității noastre și trăiește experiențe unice în Los Santos.
            </p>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <MapPin className="w-4 h-4" />
              <span>Server IP: 92.115.19.173</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Linkuri Rapide</h4>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-white transition-colors">Acasă</a></li>
              <li><a href="/server-info" className="text-gray-400 hover:text-white transition-colors">Server Info</a></li>
              <li><a href="/rules" className="text-gray-400 hover:text-white transition-colors">Reguli</a></li>
              <li><a href="/events" className="text-gray-400 hover:text-white transition-colors">Evenimente</a></li>
              <li><a href="/donate" className="text-gray-400 hover:text-white transition-colors">Donații</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center space-x-2 text-gray-400">
                <Mail className="w-4 h-4" />
                <span>admin@loyalhood.ro</span>
              </li>
              <li className="flex items-center space-x-2 text-gray-400">
                <Phone className="w-4 h-4" />
                <span>Discord: LoyalHOOD</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 LoyalHOOD Roleplay. Toate drepturile rezervate. | VRP Framework
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
