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
    'Cơ bản': 'bg-green-100 text-green-700',
    'Trung bình': 'bg-amber-100 text-amber-700',
    'Nâng cao': 'bg-red-100 text-red-700',
  };

  return (
    <Card className="overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full rounded-2xl">
      <div className="relative aspect-video overflow-hidden">
        <ImageWithFallback
          src={lesson.imageUrl}
          alt={lesson.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute top-3 left-3 flex flex-wrap gap-2">
          <Badge className={`${difficultyColors[lesson.difficulty]} border-none font-medium px-2 py-0.5 rounded-full text-[10px]`}>
            {lesson.difficulty}
          </Badge>
          <Badge className="bg-black/50 text-white border-none backdrop-blur-md px-2 py-0.5 rounded-full text-[10px]">
            {lesson.period}
          </Badge>
        </div>
      </div>
      
      <CardContent className="p-5 flex-grow">
        <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-1 group-hover:text-red-700 transition-colors">
          {lesson.title}
        </h3>
        <p className="text-gray-600 text-sm line-clamp-2 mb-4 leading-relaxed">
          {lesson.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {lesson.topics.slice(0, 3).map((topic, i) => (
            <span key={i} className="text-[10px] uppercase tracking-wider font-bold text-gray-400 bg-gray-50 px-2 py-1 rounded">
              {topic}
            </span>
          ))}
        </div>
      </CardContent>
      
      <CardFooter className="p-5 pt-0 flex items-center justify-between border-t border-gray-50 mt-auto">
        <div className="flex items-center text-gray-400 text-[11px] gap-3 font-medium">
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" /> {lesson.duration} ph
          </span>
          <span className="flex items-center gap-1">
            <BookOpen className="h-3.5 w-3.5" /> THPT
          </span>
        </div>
        <Button asChild size="sm" className="bg-red-600 hover:bg-red-700 rounded-full h-8 px-4 text-xs font-bold">
          <Link to={`/lessons/${lesson.id}`}>
            Học ngay <ChevronRight className="ml-1 h-3.5 w-3.5" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default LessonCard;
