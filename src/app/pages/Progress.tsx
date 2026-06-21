import React from 'react';
import { lessons } from '../data/mockData';
import { useProgress } from '../hooks/useProgress';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/app/components/ui/card';
import { Button } from '@/app/components/ui/button';
import { Bar, BarChart, XAxis, YAxis, Cell } from 'recharts';
import { ChartContainer, ChartTooltip, ChartTooltipContent } from '@/app/components/ui/chart';
import { Award, BookOpen, CheckCircle2, Trophy, Star, TrendingUp } from 'lucide-react';
import { cn } from '@/lib/utils';

const Progress: React.FC = () => {
  const { progress } = useProgress();

  const chartData = lessons.map(lesson => ({
    name: lesson.title.length > 8 ? lesson.title.substring(0, 8) + '..' : lesson.title,
    fullName: lesson.title,
    score: progress.quizScores[lesson.id] || 0,
  }));

  const completedCount = progress.completedLessons.length;
  const totalLessons = lessons.length;
  const completionRate = Math.round((completedCount / totalLessons) * 100);

  const scores = Object.values(progress.quizScores);
  const averageScore = scores.length > 0 
    ? Math.round(scores.reduce((acc, curr) => acc + curr, 0) / scores.length)
    : 0;

  const achievements = [
    { id: '1', title: 'Nhà sử học', icon: Trophy, unlocked: completedCount >= 1, desc: 'Hoàn thành bài học đầu tiên' },
    { id: '2', title: 'Học sinh giỏi', icon: Award, unlocked: averageScore >= 80, desc: 'Điểm trung bình trên 80%' },
    { id: '3', title: 'Đang tiến bộ', icon: TrendingUp, unlocked: completedCount >= 3, desc: 'Hoàn thành 3 bài học' },
    { id: '4', title: 'Chuyên gia', icon: Star, unlocked: completedCount === totalLessons && totalLessons > 0, desc: 'Hoàn thành tất cả bài học' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-16">
      <div className="mx-auto max-w-6xl px-6 sm:px-10">
        <div className="mb-12">
          <h1 className="mb-3 font-serif text-4xl font-bold tracking-tight text-red-800">Tiến độ học tập</h1>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">Theo dõi hành trình chinh phục triều đại lịch sử của bạn</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {/* Completion Ring */}
          <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-none">
            <CardContent className="p-10 flex flex-col items-center justify-center text-center">
              <div className="relative h-44 w-44 mb-8">
                <svg className="h-full w-full -rotate-90" viewBox="0 0 100 100">
                  <circle
                    className="text-gray-100 stroke-current"
                    strokeWidth="8"
                    fill="transparent"
                    r="42"
                    cx="50"
                    cy="50"
                  />
                  <circle
                    className="text-red-600 stroke-current transition-all duration-1000 ease-out"
                    strokeWidth="8"
                    strokeDasharray={263.9}
                    strokeDashoffset={263.9 - (263.9 * completionRate) / 100}
                    strokeLinecap="round"
                    fill="transparent"
                    r="42"
                    cx="50"
                    cy="50"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black text-red-700">{completionRate}%</span>
                  <span className="text-[9px] font-black text-gray-400 uppercase tracking-widest mt-1">Hoàn thành</span>
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Tổng quan bài học</h3>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Đã học {completedCount}/{totalLessons} chủ đề</p>
            </CardContent>
          </Card>

          {/* Average Score */}
          <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-none">
            <CardContent className="p-10 flex flex-col items-center justify-center text-center">
              <div className="relative mb-8 flex h-44 w-44 items-center justify-center rounded-2xl border-4 border-amber-600/20 bg-amber-50">
                <span className="text-6xl font-black text-amber-600 tracking-tighter">{averageScore}</span>
                <div className="absolute -right-2 -top-2 rounded-xl bg-amber-600 p-2 text-white">
                   <Star className="h-4 w-4 fill-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Điểm trung bình</h3>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Hiệu suất làm bài Quiz</p>
            </CardContent>
          </Card>

          {/* Action Card */}
          <div className="space-y-6">
             <div className="group relative overflow-hidden rounded-2xl border border-red-800 bg-red-600 p-8 text-white">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/30 bg-white/10">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-200">Tiếp tục hành trình</p>
                      <p className="font-black text-base leading-tight">Kháng chiến chống Pháp</p>
                    </div>
                  </div>
                  <Button className="h-12 w-full rounded-xl border border-white bg-white text-sm font-bold text-red-600 hover:bg-red-50">
                    VÀO BÀI HỌC NGAY
                  </Button>
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-700" />
             </div>
             
             <div className="flex items-center gap-5 rounded-2xl border border-gray-200 bg-white p-8">
                <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-xl bg-amber-50 text-amber-600">
                  <TrendingUp className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-[9px] font-black uppercase tracking-[0.2em] text-gray-300">Trạng thái học tập</p>
                  <p className="font-bold text-base text-gray-700">Rất tích cực</p>
                </div>
             </div>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          {/* Chart Card */}
          <Card className="flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-none">
            <CardHeader className="p-10 pb-0">
              <CardTitle className="text-2xl font-black text-gray-900 tracking-tight">Biểu đồ điểm số</CardTitle>
              <CardDescription className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Chi tiết điểm Quiz qua từng giai đoạn</CardDescription>
            </CardHeader>
            <CardContent className="p-10 flex-grow h-[400px]">
              <ChartContainer config={{ score: { label: "Điểm số", color: "#dc2626" } }} className="w-full h-full">
                <BarChart data={chartData} margin={{ top: 20, right: 0, left: 0, bottom: 0 }}>
                  <XAxis 
                    dataKey="name" 
                    axisLine={false} 
                    tickLine={false} 
                    tick={{ fill: '#94a3b8', fontSize: 11, fontWeight: 800 }} 
                  />
                  <YAxis 
                    hide 
                    domain={[0, 100]} 
                  />
                  <ChartTooltip 
                    content={<ChartTooltipContent hideLabel />}
                  />
                  <Bar dataKey="score" radius={[12, 12, 12, 12]} barSize={45}>
                    {chartData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.score > 0 ? '#dc2626' : '#f1f5f9'} />
                    ))}
                  </Bar>
                </BarChart>
              </ChartContainer>
            </CardContent>
          </Card>

          {/* Achievements Card */}
          <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-none">
            <CardHeader className="p-10 pb-0">
              <CardTitle className="text-2xl font-black text-gray-900 tracking-tight">Danh hiệu học tập</CardTitle>
              <CardDescription className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Nhiệm vụ để mở khóa huy hiệu học thuật</CardDescription>
            </CardHeader>
            <CardContent className="p-10">
              <div className="grid gap-5">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={cn(
                    "flex items-center gap-5 rounded-xl border p-5",
                    achievement.unlocked 
                      ? "bg-amber-50 border-amber-600/20 opacity-100"
                      : "bg-gray-50 border-gray-50 opacity-40 grayscale"
                  )}>
                    <div className={cn(
                      "h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform",
                      achievement.unlocked ? "border border-amber-600/20 bg-white text-amber-600" : "bg-gray-200 text-gray-400"
                    )}>
                      <achievement.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-black text-gray-900 text-base">{achievement.title}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">{achievement.desc}</p>
                    </div>
                    {achievement.unlocked && (
                      <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-red-600">
                        <CheckCircle2 className="h-5 w-5 text-white" />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Progress;
