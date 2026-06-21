import React from 'react';
import { NavLink } from 'react-router-dom';
import { BookOpen, Home, LineChart, MessageSquare } from 'lucide-react';
import { cn } from '@/lib/utils';

const Navigation: React.FC = () => {
  const navItems = [
    { to: '/', label: 'Trang chủ', icon: Home },
    { to: '/lessons', label: 'Bài học', icon: BookOpen },
    { to: '/ai-chat', label: 'Trợ lý AI', icon: MessageSquare },
    { to: '/progress', label: 'Tiến độ', icon: LineChart },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-5 sm:px-8">
        <NavLink to="/" className="flex items-center gap-3">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-red-600 font-serif text-lg font-bold text-white">S</span>
          <span className="hidden font-serif text-xl font-bold text-red-800 sm:block">Đại Việt Sử</span>
        </NavLink>
        <div className="flex h-full items-center gap-1 sm:gap-3">
          {navItems.map(({ to, label, icon: Icon }) => (
            <NavLink key={to} to={to} className={({ isActive }) => cn('flex h-full items-center gap-2 border-b-2 px-2 text-sm font-semibold transition-colors sm:px-3', isActive ? 'border-red-600 text-red-600' : 'border-transparent text-gray-500 hover:text-red-600')}>
              <Icon className="h-4 w-4 md:hidden" />
              <span className="hidden md:block">{label}</span>
            </NavLink>
          ))}
        </div>
        <span className="rounded-xl border border-amber-600 px-3 py-1.5 text-xs font-bold text-amber-600">THPT</span>
      </div>
    </nav>
  );
};

export default Navigation;
