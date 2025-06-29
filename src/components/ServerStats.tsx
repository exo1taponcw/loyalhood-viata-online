
import { useState, useEffect } from 'react';
import { Users, Clock, Zap, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const ServerStats = () => {
  const [stats, setStats] = useState({
    players: 0,
    uptime: '0h 0m',
    performance: 98,
    maxPlayers: 128
  });

  useEffect(() => {
    // Simulate real-time stats updates
    const interval = setInterval(() => {
      setStats(prev => ({
        ...prev,
        players: Math.floor(Math.random() * 128) + 1,
        performance: Math.floor(Math.random() * 10) + 90,
        uptime: `${Math.floor(Math.random() * 168)}h ${Math.floor(Math.random() * 60)}m`
      }));
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const statItems = [
    {
      label: 'Jucători Online',
      value: `${stats.players}/${stats.maxPlayers}`,
      icon: Users,
      color: 'text-green-600',
      bgColor: 'bg-green-50'
    },
    {
      label: 'Uptime Server',
      value: stats.uptime,
      icon: Clock,
      color: 'text-blue-600',
      bgColor: 'bg-blue-50'
    },
    {
      label: 'Performanță',
      value: `${stats.performance}%`,
      icon: Zap,
      color: 'text-yellow-600',
      bgColor: 'bg-yellow-50'
    },
    {
      label: 'Server IP',
      value: '92.115.19.173',
      icon: Globe,
      color: 'text-purple-600',
      bgColor: 'bg-purple-50'
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {statItems.map((stat, index) => (
        <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
          <CardContent className="p-6">
            <div className="flex items-center space-x-4">
              <div className={`p-3 rounded-lg ${stat.bgColor}`}>
                <stat.icon className={`w-6 h-6 ${stat.color}`} />
              </div>
              <div>
                <p className="text-sm text-gray-600 font-medium">{stat.label}</p>
                <p className="text-xl font-bold text-gray-900">{stat.value}</p>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default ServerStats;
