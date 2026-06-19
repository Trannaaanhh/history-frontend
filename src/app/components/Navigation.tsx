import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, MessageSquare, LineChart, Home } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const navItems = [
    { to: '/', label: 'Trang chủ', icon: Home },
    { to: '/lessons', label: 'Bài học', icon: BookOpen },
    { to: '/ai-chat', label: 'Trợ lý AI', icon: MessageSquare },
    { to: '/progress', label: 'Tiến độ', icon: LineChart },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-gray-100 bg-white/80 backdrop-blur-md">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-red-600 text-white font-bold text-lg">
              S
            </div>
            <span className="text-xl font-bold text-red-800 hidden sm:block">Đại Việt Sử</span>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-6">
            {navItems.map(({ to, label, icon: Icon }) => (
              <NavLink
                key={to}
                to={to}
                className={({ isActive }) =>
                  cn(
                    "flex items-center gap-2 px-3 py-2 rounded-md text-sm font-medium transition-colors",
                    isActive 
                      ? "text-red-600 bg-red-50" 
                      : "text-gray-600 hover:text-red-600 hover:bg-red-50/50"
                  )
                }
              >
                <Icon className="h-4 w-4" />
                <span className="hidden md:block">{label}</span>
              </NavLink>
            ))}
          </div>
          
          <div className="flex items-center">
            <div className="h-8 w-8 rounded-full bg-amber-100 border border-amber-200 flex items-center justify-center text-amber-700 text-xs font-bold">
              THPT
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
