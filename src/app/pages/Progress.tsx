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
    <div className="bg-gray-50/30 min-h-screen py-16">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-12">
          <h1 className="text-4xl font-black text-red-800 mb-2 tracking-tight">Tiến độ học tập</h1>
          <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-[10px]">Theo dõi hành trình chinh phục triều đại lịch sử của bạn</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-3 mb-12">
          {/* Completion Ring */}
          <Card className="border-none shadow-2xl shadow-gray-200/40 rounded-[2.5rem] bg-white overflow-hidden">
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
          <Card className="border-none shadow-2xl shadow-gray-200/40 rounded-[2.5rem] bg-white overflow-hidden">
            <CardContent className="p-10 flex flex-col items-center justify-center text-center">
              <div className="h-44 w-44 mb-8 flex items-center justify-center bg-amber-50 rounded-[3rem] border-4 border-amber-100/50 relative">
                <span className="text-6xl font-black text-amber-600 tracking-tighter">{averageScore}</span>
                <div className="absolute -top-2 -right-2 bg-amber-400 text-white p-2 rounded-xl shadow-lg shadow-amber-200 rotate-12">
                   <Star className="h-4 w-4 fill-white" />
                </div>
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-1">Điểm trung bình</h3>
              <p className="text-xs text-gray-500 font-semibold uppercase tracking-wider">Hiệu suất làm bài Quiz</p>
            </CardContent>
          </Card>

          {/* Action Card */}
          <div className="space-y-6">
             <div className="bg-gradient-to-br from-red-600 to-red-800 text-white p-8 rounded-[2.5rem] shadow-2xl shadow-red-200 relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="h-12 w-12 rounded-2xl bg-white/20 backdrop-blur-md flex items-center justify-center">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <p className="text-[9px] font-black uppercase tracking-[0.2em] text-red-200">Tiếp tục hành trình</p>
                      <p className="font-black text-base leading-tight">Kháng chiến chống Pháp</p>
                    </div>
                  </div>
                  <Button className="w-full bg-white text-red-600 hover:bg-red-50 rounded-2xl font-black h-14 text-sm shadow-xl shadow-red-900/20 active:scale-95 transition-all">
                    VÀO BÀI HỌC NGAY
                  </Button>
                </div>
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-white/10 group-hover:scale-110 transition-transform duration-700" />
             </div>
             
             <div className="bg-white border border-gray-100 p-8 rounded-[2rem] shadow-sm flex items-center gap-5">
                <div className="h-14 w-14 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 flex-shrink-0">
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
          <Card className="border-none shadow-2xl shadow-gray-200/40 rounded-[2.5rem] bg-white overflow-hidden flex flex-col">
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
          <Card className="border-none shadow-2xl shadow-gray-200/40 rounded-[2.5rem] bg-white overflow-hidden">
            <CardHeader className="p-10 pb-0">
              <CardTitle className="text-2xl font-black text-gray-900 tracking-tight">Danh hiệu học tập</CardTitle>
              <CardDescription className="text-[10px] font-black uppercase tracking-widest text-gray-400 mt-1">Nhiệm vụ để mở khóa huy hiệu học thuật</CardDescription>
            </CardHeader>
            <CardContent className="p-10">
              <div className="grid gap-5">
                {achievements.map((achievement) => (
                  <div key={achievement.id} className={cn(
                    "flex items-center gap-5 p-5 rounded-[1.5rem] border-2 transition-all duration-300",
                    achievement.unlocked 
                      ? "bg-amber-50/40 border-amber-100 opacity-100 shadow-sm" 
                      : "bg-gray-50 border-gray-50 opacity-40 grayscale"
                  )}>
                    <div className={cn(
                      "h-14 w-14 rounded-2xl flex items-center justify-center flex-shrink-0 transition-transform",
                      achievement.unlocked ? "bg-white text-amber-600 shadow-xl shadow-amber-200/50 scale-110" : "bg-gray-200 text-gray-400"
                    )}>
                      <achievement.icon className="h-7 w-7" />
                    </div>
                    <div className="flex-grow">
                      <h4 className="font-black text-gray-900 text-base">{achievement.title}</h4>
                      <p className="text-[10px] text-gray-500 font-bold uppercase tracking-wider mt-0.5">{achievement.desc}</p>
                    </div>
                    {achievement.unlocked && (
                      <div className="h-8 w-8 rounded-full bg-green-500 flex items-center justify-center">
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
