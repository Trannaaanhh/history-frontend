import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navigation from './Navigation';

const Root: React.FC = () => {
  const { pathname } = useLocation();
  const isChatPage = pathname === '/ai-chat';

  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 antialiased">
      <Navigation />
      <main>
        <Outlet />
      </main>
      {!isChatPage && <footer className="border-t border-gray-100 bg-gray-50 py-12 mt-auto">
        <div className="container mx-auto px-4 text-center">
          <p className="text-red-800 font-bold text-lg mb-2">Lịch Sử Việt Nam — Nền Tảng Học Tập Tương Tác</p>
          <p className="text-gray-500 text-sm italic mb-6">"Dân ta phải biết sử ta, Cho tường gốc tích nước nhà Việt Nam"</p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-2 text-gray-400 text-sm">
            <span>© 2024 Nền tảng học tập THPT</span>
            <span>Trợ lý AI RAG</span>
            <span>Tài liệu tham khảo chính thống</span>
          </div>
        </div>
      </footer>}
    </div>
  );
};

export default Root;
