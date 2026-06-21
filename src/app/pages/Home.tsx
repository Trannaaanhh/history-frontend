import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, BookOpen, MessageSquare } from 'lucide-react';
import { lessons } from '../data/mockData';

const Home: React.FC = () => {
  const features = [
    { title: 'Bài học tương tác', desc: 'Nội dung tinh gọn, dễ hiểu, bám sát chương trình THPT với hình ảnh minh họa sinh động.', icon: BookOpen },
    { title: 'Trợ lý AI Thông minh', desc: 'Hỏi đáp mọi kiến thức lịch sử 24/7 với công nghệ RAG đảm bảo độ chính xác cao.', icon: MessageSquare },
    { title: 'Kiểm tra & Đánh giá', desc: 'Hệ thống câu hỏi trắc nghiệm đa dạng, phản hồi tức thì giúp củng cố kiến thức hiệu quả.', icon: Award },
  ];

  return (
    <div className="bg-white">
      <section className="grid min-h-[calc(100vh-72px)] border-b border-gray-200 lg:grid-cols-[1.05fr_.95fr]">
        <div className="flex items-center bg-red-50 px-6 py-20 sm:px-10 lg:px-16 xl:px-24">
          <div className="max-w-2xl">
            <p className="mb-7 text-xs font-bold uppercase tracking-[0.24em] text-amber-600">Nền tảng học tập lịch sử THPT</p>
            <h1 className="font-serif text-5xl font-bold leading-[1.02] tracking-tight text-red-800 sm:text-6xl xl:text-7xl">
              Học Lịch Sử<br /><span className="italic">Việt Nam</span>
            </h1>
            <p className="mt-8 max-w-xl text-base leading-8 text-gray-600 sm:text-lg">
              Nền tảng học tập tương tác hiện đại dành riêng cho học sinh THPT. Khám phá hào khí dân tộc qua những bài học sinh động và trợ lý AI thông minh.
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link to="/lessons" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-7 text-sm font-bold text-white hover:bg-red-800">
                Bắt đầu học ngay <ArrowRight className="h-4 w-4" />
              </Link>
              <Link to="/ai-chat" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-red-600 bg-white px-7 text-sm font-bold text-red-600 hover:bg-red-50">
                Hỏi trợ lý AI <MessageSquare className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
        <div className="relative min-h-[420px] overflow-hidden bg-gray-100 lg:min-h-0">
          <img src="/lesson-images/nha-tran-v2.webp" alt="Lịch sử Việt Nam" className="h-full w-full object-cover" />
          <div className="absolute inset-x-0 bottom-0 border-t border-white/30 bg-red-800/90 p-6 text-white sm:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-50">Hào khí Đông A</p>
            <p className="mt-2 font-serif text-2xl font-bold italic">Thấu hiểu quá khứ. Vững bước tương lai.</p>
          </div>
        </div>
      </section>

      <section className="border-b border-gray-200 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
            <div>
              <div className="mb-7 h-14 w-1 bg-red-600" />
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Chương trình học</p>
              <h2 className="mt-4 font-serif text-4xl font-bold italic leading-tight text-red-800 sm:text-5xl">Khám phá dòng chảy lịch sử</h2>
              <p className="mt-6 max-w-md leading-7 text-gray-600">Các bài học được sắp xếp theo tiến trình, giúp người học xây dựng kiến thức có hệ thống và dễ ghi nhớ.</p>
              <Link to="/lessons" className="mt-8 inline-flex items-center gap-2 border-b-2 border-red-600 pb-1 text-sm font-bold uppercase tracking-wider text-red-600">Xem toàn bộ giáo trình <ArrowRight className="h-4 w-4" /></Link>
            </div>
            <div className="border-t border-gray-200">
              {lessons.slice(0, 5).map((lesson, index) => (
                <Link key={lesson.id} to={`/lessons/${lesson.id}`} className="group grid grid-cols-[36px_1fr] gap-4 border-b border-gray-200 py-6 sm:grid-cols-[44px_1fr_auto] sm:items-baseline">
                  <span className="text-xs text-gray-400">0{index + 1}</span>
                  <span className="font-serif text-xl font-bold text-gray-900 group-hover:text-red-600 sm:text-2xl">{lesson.title}</span>
                  <span className="col-start-2 text-xs font-bold uppercase tracking-widest text-amber-600 sm:col-start-auto">{lesson.period}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-amber-50 py-20 sm:py-28">
        <div className="mx-auto max-w-7xl px-6 sm:px-10">
          <div className="mb-12 max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Trải nghiệm học tập toàn diện</p>
            <h2 className="mt-4 font-serif text-4xl font-bold text-red-800 sm:text-5xl">Công nghệ phục vụ tri thức</h2>
          </div>
          <div className="grid gap-px overflow-hidden rounded-2xl border border-gray-200 bg-gray-200 md:grid-cols-3">
            {features.map(({ title, desc, icon: Icon }, index) => (
              <div key={title} className="bg-white p-8 sm:p-10">
                <div className="flex items-start justify-between">
                  <Icon className="h-7 w-7 text-red-600" />
                  <span className="text-xs text-gray-400">0{index + 1}</span>
                </div>
                <h3 className="mt-12 font-serif text-2xl font-bold text-red-800">{title}</h3>
                <p className="mt-4 text-sm leading-7 text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-y border-gray-200 bg-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 px-6 sm:px-10 lg:grid-cols-4">
          {[
            { label: 'Chủ đề học tập', value: '6' },
            { label: 'Câu hỏi trắc nghiệm', value: '50+' },
            { label: 'Công nghệ AI RAG', value: 'Sẵn sàng' },
            { label: 'Hỗ trợ 24/7', value: 'Online' },
          ].map((stat) => (
            <div key={stat.label} className="border-b border-gray-200 px-4 py-10 text-center odd:border-r lg:border-b-0 lg:border-r lg:last:border-r-0">
              <div className="font-serif text-3xl font-bold italic text-red-800">{stat.value}</div>
              <div className="mt-2 text-[10px] font-bold uppercase tracking-[0.18em] text-gray-500">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-red-50 px-6 py-20 sm:px-10 sm:py-28">
        <div className="mx-auto grid max-w-7xl gap-8 rounded-2xl border border-red-600/20 bg-white p-8 sm:p-12 lg:grid-cols-[1fr_auto] lg:items-end">
          <div className="max-w-3xl">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Bắt đầu hành trình</p>
            <h2 className="mt-4 font-serif text-4xl font-bold italic text-red-800">Sẵn sàng trở thành nhà sử học tương lai?</h2>
            <p className="mt-5 text-base leading-7 text-gray-600">Bắt đầu hành trình khám phá cội nguồn dân tộc ngay hôm nay với nền tảng học tập chuyên nghiệp nhất.</p>
          </div>
          <Link to="/lessons" className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-red-600 px-7 text-sm font-bold text-white hover:bg-red-800">
            Khám phá các bài học <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
