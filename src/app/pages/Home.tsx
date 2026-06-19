import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent } from '@/app/components/ui/card';
import { BookOpen, MessageSquare, Award, ArrowRight, Zap, Shield, Users } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-red-50 py-24 lg:py-32">
        <div className="container relative z-10 mx-auto px-4 text-center">
          <div className="mx-auto max-w-3xl">
            <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-red-800 sm:text-6xl">
              Học Lịch Sử Việt Nam
            </h1>
            <p className="mb-10 text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Nền tảng học tập tương tác hiện đại dành riêng cho học sinh THPT.
              Khám phá hào khí dân tộc qua những bài học sinh động và trợ lý AI thông minh.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-red-600 hover:bg-red-700 text-white px-8 h-12 text-lg rounded-full shadow-lg shadow-red-200">
                <Link to="/lessons">
                  Bắt đầu học ngay <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-red-200 text-red-700 hover:bg-red-50 h-12 text-lg rounded-full">
                <Link to="/ai-chat">
                  Hỏi trợ lý AI <MessageSquare className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
        
        {/* Abstract background shapes */}
        <div className="absolute -top-24 -left-24 h-96 w-96 rounded-full bg-amber-100/50 blur-3xl" />
        <div className="absolute -bottom-24 -right-24 h-96 w-96 rounded-full bg-red-100/50 blur-3xl" />
      </section>

      {/* Feature Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-red-800 mb-4">Trải nghiệm học tập toàn diện</h2>
            <div className="mx-auto h-1 w-20 bg-amber-500 rounded-full" />
          </div>
          
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Bài học tương tác',
                desc: 'Nội dung tinh gọn, dễ hiểu, bám sát chương trình THPT với hình ảnh minh họa sinh động.',
                icon: BookOpen,
                color: 'bg-red-100 text-red-600',
              },
              {
                title: 'Trợ lý AI Thông minh',
                desc: 'Hỏi đáp mọi kiến thức lịch sử 24/7 với công nghệ RAG đảm bảo độ chính xác cao.',
                icon: MessageSquare,
                color: 'bg-amber-100 text-amber-600',
              },
              {
                title: 'Kiểm tra & Đánh giá',
                desc: 'Hệ thống câu hỏi trắc nghiệm đa dạng, phản hồi tức thì giúp củng cố kiến thức hiệu quả.',
                icon: Award,
                color: 'bg-green-100 text-green-600',
              },
            ].map((feature, i) => (
              <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow">
                <CardContent className="pt-8">
                  <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl ${feature.color}`}>
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="mb-3 text-xl font-bold text-gray-900">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-amber-50 py-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 grid-cols-2 md:grid-cols-4 text-center">
            {[
              { label: 'Chủ đề học tập', value: '6', icon: Zap },
              { label: 'Câu hỏi trắc nghiệm', value: '50+', icon: Shield },
              { label: 'Công nghệ AI RAG', value: 'Sẵn sàng', icon: Users },
              { label: 'Hỗ trợ 24/7', value: 'Online', icon: BookOpen },
            ].map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-3xl font-bold text-red-700 mb-2">{stat.value}</div>
                <div className="text-gray-500 text-sm font-medium uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 to-amber-600 px-8 py-16 text-center text-white shadow-xl shadow-red-100">
            <div className="relative z-10">
              <h2 className="mb-6 text-3xl font-bold sm:text-4xl">
                Sẵn sàng trở thành nhà sử học tương lai?
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-lg text-red-50">
                Bắt đầu hành trình khám phá cội nguồn dân tộc ngay hôm nay với nền tảng học tập chuyên nghiệp nhất.
              </p>
              <Button asChild size="lg" className="bg-white text-red-600 hover:bg-red-50 px-10 h-14 text-lg font-bold rounded-full">
                <Link to="/lessons">Khám phá các bài học</Link>
              </Button>
            </div>
            
            {/* Decorative circles */}
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-white/10" />
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-amber-400/20" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
