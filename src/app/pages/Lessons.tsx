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
    <div className="bg-white min-h-screen">
      {/* Header */}
      <div className="bg-red-50/50 py-16 border-b border-red-50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-extrabold text-red-800 mb-4 tracking-tight">Thư viện bài học</h1>
            <p className="text-gray-600 text-lg leading-relaxed">
              Khám phá các thời kỳ lịch sử hào hùng của dân tộc Việt Nam qua hệ thống bài học được biên soạn công phu, bám sát chương trình THPT.
            </p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Toolbar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          <div className="flex flex-wrap justify-center md:justify-start gap-2">
            {filters.map((f) => (
              <Button
                key={f}
                variant={filter === f ? 'default' : 'outline'}
                className={filter === f 
                  ? 'bg-red-600 hover:bg-red-700 border-none rounded-full px-6' 
                  : 'border-gray-200 text-gray-600 hover:bg-gray-50 rounded-full px-6'}
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
              className="pl-10 border-gray-200 focus:border-red-300 focus:ring-red-100 rounded-full"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>

        {/* Grid */}
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
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
