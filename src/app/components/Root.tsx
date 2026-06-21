import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Root: React.FC = () => {
  const { pathname } = useLocation();
  const isChatPage = pathname === '/ai-chat';

  return (
    <div className="flex min-h-screen flex-col bg-white font-sans text-gray-900 antialiased">
      <Navigation />
      <main className="flex-1">
        <Outlet />
      </main>
      {!isChatPage && <footer className="mt-auto border-t border-gray-200 bg-red-50 py-14">
        <div className="mx-auto max-w-7xl px-6 text-center sm:px-10">
          <p className="font-serif text-xl font-bold text-red-800">Lịch Sử Việt Nam — Nền Tảng Học Tập Tương Tác</p>
          <p className="mb-8 mt-3 text-sm leading-6 text-gray-600">"Dân ta phải biết sử ta, Cho tường gốc tích nước nhà Việt Nam"</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3 border-t border-red-600/20 pt-7 text-xs font-semibold uppercase tracking-wider text-gray-500">
            <span>© 2026 Nền tảng học tập THPT</span>
            <span>Trợ lý AI RAG</span>
            <span>Tài liệu tham khảo chính thống</span>
          </div>
        </div>
      </footer>}
    </div>
  );
};

export default Root;
