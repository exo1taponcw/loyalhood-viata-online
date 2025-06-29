
import { useState } from 'react';
import { Menu, X, Users, Server, BookOpen, DollarSign, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Acasă', path: '/', icon: Server },
    { name: 'Server Info', path: '/server-info', icon: Users },
    { name: 'Reguli', path: '/rules', icon: BookOpen },
    { name: 'Evenimente', path: '/events', icon: Calendar },
    { name: 'Donații', path: '/donate', icon: DollarSign },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md border-b border-purple-100 sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <Server className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                LoyalHOOD
              </h1>
              <p className="text-xs text-gray-600">Roleplay Server</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <NavLink
                key={item.name}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-200 ${
                    isActive
                      ? 'bg-gradient-primary text-white shadow-lg'
                      : 'text-gray-700 hover:text-purple-600 hover:bg-purple-50'
                  }`
                }
              >
                <item.icon className="w-4 h-4" />
                <span className="font-medium">{item.name}</span>
              </NavLink>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-purple-100">
            <nav className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.path}
                  className={({ isActive }) =>
                    `flex items-center space-x-2 px-4 py-3 rounded-lg transition-all duration-200 ${
                      isActive
                        ? 'bg-gradient-primary text-white'
                        : 'text-gray-700 hover:bg-purple-50'
                    }`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
