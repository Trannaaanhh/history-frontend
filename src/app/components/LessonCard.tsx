import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardFooter } from '@/app/components/ui/card';
import { Badge } from '@/app/components/ui/badge';
import { Button } from '@/app/components/ui/button';
import { Clock, BookOpen, ChevronRight } from 'lucide-react';
import ImageWithFallback from './figma/ImageWithFallback';
import type { Lesson } from '../data/mockData';

interface LessonCardProps {
  lesson: Lesson;
}

const LessonCard: React.FC<LessonCardProps> = ({ lesson }) => {
  const difficultyColors = {
    'Cơ bản': 'bg-white text-gray-700 border-gray-200',
    'Trung bình': 'bg-amber-50 text-amber-600 border-amber-600/20',
    'Nâng cao': 'bg-red-50 text-red-600 border-red-600/20',
  };

  return (
    <Card className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white py-0 shadow-none transition-colors hover:border-red-600/40">
      <div className="relative aspect-video overflow-hidden bg-gray-100">
        <ImageWithFallback
          src={lesson.imageUrl}
          alt={lesson.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
        />
        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
          <Badge className={`${difficultyColors[lesson.difficulty]} rounded-xl border px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider`}>
            {lesson.difficulty}
          </Badge>
          <Badge className="rounded-xl border border-white/30 bg-red-800 px-2.5 py-1 text-[10px] font-bold text-white">
            {lesson.period}
          </Badge>
        </div>
      </div>
      
      <CardContent className="flex-grow p-5">
        <p className="mb-2 text-[9px] font-bold uppercase tracking-[0.18em] text-amber-600">Bài học lịch sử</p>
        <h3 className="mb-2 line-clamp-1 font-serif text-xl font-bold text-red-800 transition-colors group-hover:text-red-600">
          {lesson.title}
        </h3>
        <p className="mb-4 line-clamp-2 text-sm leading-6 text-gray-600">
          {lesson.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {lesson.topics.slice(0, 3).map((topic, i) => (
            <span key={i} className="rounded-lg border border-gray-200 bg-gray-50 px-2 py-1 text-[10px] font-semibold uppercase tracking-wider text-gray-500">
              {topic}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="mt-auto flex items-center justify-between border-t border-gray-200 p-4">
        <div className="flex items-center gap-3 text-[11px] font-semibold text-gray-500">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {lesson.duration} ph
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" /> THPT
          </span>
        </div>
        <Button asChild size="sm" className="h-9 rounded-xl bg-red-600 px-4 text-xs font-bold hover:bg-red-800">
          <Link to={`/lessons/${lesson.id}`}>
            Học ngay <ChevronRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LessonCard;
