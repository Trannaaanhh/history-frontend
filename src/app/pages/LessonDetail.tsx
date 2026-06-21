import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessons } from '../data/mockData';
import MarkdownRenderer from '../components/MarkdownRenderer';
import ImageWithFallback from '../components/figma/ImageWithFallback';
import { Button } from '@/app/components/ui/button';
import { Badge } from '@/app/components/ui/badge';
import { Card, CardContent } from '@/app/components/ui/card';
import { Clock, Award, BookOpen, ChevronLeft, ChevronRight, PlayCircle, Zap } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';

const LessonDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { completeLesson } = useProgress();
  
  const lesson = lessons.find(l => l.id === id);
  const currentIndex = lessons.findIndex(l => l.id === id);
  
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;

  useEffect(() => {
    if (lesson) {
      completeLesson(lesson.id);
      window.scrollTo(0, 0);
    }
  }, [completeLesson, lesson]);

  if (!lesson) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Không tìm thấy bài học</h2>
        <Button asChild className="rounded-xl bg-red-600 px-8">
          <Link to="/lessons">Quay lại danh sách</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Hero Header */}
      <div className="relative h-[360px] w-full overflow-hidden md:h-[480px]">
        <ImageWithFallback
          src={lesson.imageUrl}
          alt={lesson.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-red-800/60" />
        <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 lg:p-20">
          <div className="mx-auto max-w-7xl">
            <Link to="/lessons" className="text-white/70 hover:text-white flex items-center gap-1 text-xs font-bold uppercase tracking-wider mb-6 transition-colors">
              <ChevronLeft className="h-4 w-4" /> Thư viện bài học
            </Link>
            <h1 className="mb-6 max-w-4xl font-serif text-4xl font-bold italic leading-tight tracking-tight text-white md:text-6xl">
              {lesson.title}
            </h1>
            <div className="flex flex-wrap gap-x-6 gap-y-3 text-white/90 font-medium">
              <span className="flex items-center gap-2 text-sm"><Clock className="h-4 w-4 text-white" /> {lesson.duration} phút học</span>
              <span className="flex items-center gap-2 text-sm"><Award className="h-4 w-4 text-amber-50" /> {lesson.difficulty}</span>
              <span className="flex items-center gap-2 text-sm font-bold uppercase tracking-widest text-amber-50">{lesson.period}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section */}
      <div className="mx-auto w-full max-w-7xl px-6 py-14 sm:px-10 md:py-20">
        <div className="flex flex-col gap-12 lg:flex-row xl:gap-20">
          {/* Main Content */}
          <article className="max-w-3xl flex-grow">
            <div className="prose prose-red max-w-none">
              <MarkdownRenderer content={lesson.content} />
            </div>
            
            {/* Prev/Next Nav */}
            <div className="mt-20 pt-10 border-t border-gray-100 flex items-center justify-between">
              {prevLesson ? (
                <Link to={`/lessons/${prevLesson.id}`} className="group flex flex-col items-start gap-1.5 max-w-[45%]">
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest flex items-center gap-1">
                    <ChevronLeft className="h-3 w-3" /> Bài trước
                  </span>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors line-clamp-1">
                    {prevLesson.title}
                  </span>
                </Link>
              ) : <div />}
              
              {nextLesson ? (
                <Link to={`/lessons/${nextLesson.id}`} className="group flex flex-col items-end gap-1.5 text-right max-w-[45%]">
                  <span className="text-[10px] text-gray-400 uppercase font-black tracking-widest flex items-center gap-1">
                    Bài tiếp theo <ChevronRight className="h-3 w-3" />
                  </span>
                  <span className="text-sm font-bold text-gray-800 group-hover:text-red-600 transition-colors line-clamp-1">
                    {nextLesson.title}
                  </span>
                </Link>
              ) : <div />}
            </div>
          </article>

          {/* Sidebar */}
          <aside className="lg:w-80 flex-shrink-0">
            <div className="sticky top-24 space-y-6">
              <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-red-50 shadow-none">
                <CardContent className="p-6">
                  <h3 className="text-lg font-bold text-red-800 mb-5 flex items-center gap-2">
                    <BookOpen className="h-5 w-5" /> Thông tin bài học
                  </h3>
                  <div className="space-y-5 mb-8">
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1.5">Mức độ</p>
                      <Badge variant="outline" className="rounded-xl border-red-600/20 bg-white px-3 py-1 font-bold text-red-600">
                        {lesson.difficulty}
                      </Badge>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1.5">Thời gian</p>
                      <p className="text-sm text-gray-700 font-bold">{lesson.duration} phút học tập chuyên sâu</p>
                    </div>
                    <div>
                      <p className="text-[10px] text-gray-400 uppercase font-black tracking-widest mb-1.5">Từ khóa chính</p>
                      <div className="flex flex-wrap gap-2">
                        {lesson.topics.map((t, i) => (
                          <span key={i} className="text-[10px] font-bold bg-white border border-gray-100 text-gray-500 px-2 py-1 rounded-lg">
                            #{t}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <Button asChild className="h-12 w-full rounded-xl bg-red-600 text-sm font-bold hover:bg-red-800">
                    <Link to={`/quiz/${lesson.id}`} className="flex items-center justify-center gap-2">
                      <PlayCircle className="h-5 w-5" /> Bắt đầu Quiz
                    </Link>
                  </Button>
                </CardContent>
              </Card>
              
              <div className="p-6 rounded-2xl bg-amber-50 border border-amber-100/50">
                <h4 className="font-bold text-amber-800 mb-3 text-xs uppercase tracking-widest flex items-center gap-2">
                  <Zap className="h-4 w-4" /> Mẹo học tập
                </h4>
                <p className="text-xs text-amber-700 leading-relaxed font-medium">
                  Hãy chú ý các phần in đậm và danh sách các sự kiện. Chúng thường xuất hiện trong các câu hỏi trắc nghiệm quan trọng!
                </p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default LessonDetail;
