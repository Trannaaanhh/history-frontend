import React, { useState } from 'react';
import { lessons } from '../data/mockData';
import LessonCard from '../components/LessonCard';
import { Button } from '@/app/components/ui/button';
import { Search } from 'lucide-react';
import { Input } from '@/app/components/ui/input';

const Lessons: React.FC = () => {
  const [filter, setFilter] = useState<'All' | 'Cơ bản' | 'Trung bình' | 'Nâng cao'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredLessons = lessons.filter(l => {
    const matchesFilter = filter === 'All' || l.difficulty === filter;
    const matchesSearch = l.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         l.description.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  const filters = ['All', 'Cơ bản', 'Trung bình', 'Nâng cao'] as const;

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <div className="border-b border-gray-200 bg-red-50 py-12 sm:py-14">
        <div className="mx-auto max-w-6xl px-6 sm:px-10">
          <div className="max-w-3xl">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.22em] text-amber-600">Chương trình THPT</p>
            <h1 className="mb-4 font-serif text-3xl font-bold tracking-tight text-red-800 sm:text-4xl">Thư viện bài học</h1>
            <p className="text-base leading-8 text-gray-600 sm:text-lg">
              Khám phá các thời kỳ lịch sử hào hùng của dân tộc Việt Nam qua hệ thống bài học được biên soạn công phu, bám sát chương trình THPT.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-6 py-10 sm:px-10 sm:py-12">
        {/* Toolbar */}
        <div className="mb-8 flex flex-col items-center justify-between gap-5 border-b border-gray-200 pb-6 md:flex-row">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? 'default' : 'outline'}
                className={filter === f 
                  ? 'rounded-xl border-red-600 bg-red-600 px-5 hover:bg-red-800'
                  : 'rounded-xl border-gray-200 bg-white px-5 text-gray-600 hover:border-red-600 hover:bg-red-50 hover:text-red-600'}
                onClick={() => setFilter(f)}
                size="sm"
              >
                {f === 'All' ? 'Tất cả' : f}
              </Button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Tìm kiếm bài học..." 
              className="h-11 rounded-xl border-gray-200 bg-white pl-10 focus:border-red-600 focus:ring-red-600/10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLessons.map((lesson) => (
            <LessonCard key={lesson.id} lesson={lesson} />
          ))}
        </div>
        
        {filteredLessons.length === 0 && (
          <div className="text-center py-32">
            <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-gray-50 mb-4 text-gray-300">
              <Search className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-1">Không tìm thấy bài học</h3>
            <p className="text-gray-500">Thử thay đổi bộ lọc hoặc từ khóa tìm kiếm của bạn.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Lessons;
