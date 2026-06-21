import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { lessons, quizQuestions } from '../data/mockData';
import { Button } from '@/app/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/app/components/ui/card';
import { Progress as ProgressBar } from "../components/ui/progress";
import { ChevronLeft, CheckCircle2, XCircle, Info, ArrowRight, RotateCcw, Award } from 'lucide-react';
import { useProgress } from '../hooks/useProgress';
import { cn } from '@/lib/utils';

const Quiz: React.FC = () => {
  const { lessonId } = useParams<{ lessonId: string }>();
  const { updateQuizScore } = useProgress();
  
  const lesson = lessons.find(l => l.id === lessonId);
  const questions = quizQuestions.filter(q => q.lessonId === lessonId);
  
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);

  if (!lesson || questions.length === 0) {
    return (
      <div className="container mx-auto px-4 py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Không có bộ câu hỏi cho bài học này</h2>
        <Button asChild className="bg-red-600 rounded-full px-8">
          <Link to="/lessons">Quay lại danh sách</Link>
        </Button>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const progressPercent = ((currentQuestionIndex) / questions.length) * 100;

  const handleOptionSelect = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
  };

  const handleCheckAnswer = () => {
    if (selectedOption === null) return;
    
    const correct = selectedOption === currentQuestion.correctAnswer;
    if (correct) {
      setScore(prev => prev + 1);
    }
    setIsAnswered(true);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResults(true);
      const finalScore = Math.round(((score + (selectedOption === currentQuestion.correctAnswer ? 1 : 0)) / questions.length) * 100);
      updateQuizScore(lessonId!, finalScore);
    }
  };

  const handleRestart = () => {
    setCurrentQuestionIndex(0);
    setSelectedOption(null);
    setIsAnswered(false);
    setScore(0);
    setShowResults(false);
  };

  if (showResults) {
    const finalPercent = Math.round((score / questions.length) * 100);
    return (
      <div className="flex min-h-screen items-center justify-center bg-red-50 py-20">
        <Card className="mx-4 w-full max-w-xl overflow-hidden rounded-2xl border border-gray-200 bg-white py-0 shadow-none">
          <div className="bg-red-600 p-12 text-center text-white">
            <Award className="mx-auto mb-6 h-20 w-20 text-amber-50" />
            <h2 className="text-4xl font-black mb-3 tracking-tight">Kết quả bài học</h2>
            <p className="text-red-100 font-medium text-lg">{lesson.title}</p>
          </div>
          <CardContent className="p-12 text-center">
            <div className="mb-10">
              <span className="text-7xl font-black text-red-700 leading-none">{finalPercent}%</span>
              <p className="text-gray-400 font-bold uppercase tracking-[0.2em] text-xs mt-4">Điểm số đạt được</p>
            </div>
            
            <div className="flex justify-center gap-12 mb-12">
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-amber-600">{score}</span>
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Câu đúng</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-2xl font-black text-red-400">{questions.length - score}</span>
                <span className="text-gray-400 font-bold uppercase text-[10px] tracking-widest mt-1">Câu sai</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button onClick={handleRestart} variant="outline" className="flex-1 rounded-2xl h-14 border-red-200 text-red-700 font-bold text-base hover:bg-red-50">
                <RotateCcw className="h-5 w-5 mr-2" /> Thử lại
              </Button>
              <Button asChild className="h-14 flex-1 rounded-xl bg-red-600 text-base font-bold hover:bg-red-800">
                <Link to="/lessons">Tiếp tục học <ArrowRight className="h-5 w-5 ml-2" /></Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <Link to={`/lessons/${lessonId}`} className="flex items-center gap-2 text-[10px] text-gray-400 hover:text-red-600 transition-colors font-black uppercase tracking-[0.2em]">
            <ChevronLeft className="h-4 w-4" /> Thoát Quiz
          </Link>
          <div className="text-[10px] font-black text-red-800 bg-red-100 px-4 py-1.5 rounded-full uppercase tracking-widest">
            {lesson.title}
          </div>
        </div>

        {/* Progress */}
        <div className="mb-12">
          <div className="flex justify-between items-end mb-3">
            <span className="text-[10px] font-black text-gray-400 uppercase tracking-[0.2em]">Câu hỏi {currentQuestionIndex + 1}/{questions.length}</span>
            <span className="text-[10px] font-black text-red-600 uppercase tracking-[0.2em]">{Math.round(progressPercent)}% Hoàn thành</span>
          </div>
          <ProgressBar value={progressPercent} className="h-1.5 bg-gray-200" />
        </div>

        {/* Question Card */}
        <Card className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-none">
          <CardHeader className="p-8 md:p-16 pb-8">
            <CardTitle className="text-2xl md:text-3xl font-black text-gray-900 leading-tight tracking-tight">
              {currentQuestion.question}
            </CardTitle>
          </CardHeader>
          
          <CardContent className="p-8 md:p-16 pt-0 space-y-4">
            <div className="grid gap-4">
              {currentQuestion.options.map((option, index) => {
                    let stateClass = "border-gray-200 hover:border-red-600 hover:bg-red-50 bg-white";
                
                if (isAnswered) {
                  if (index === currentQuestion.correctAnswer) {
                    stateClass = "border-amber-600 bg-amber-50 text-gray-900 ring-2 ring-amber-600/10";
                  } else if (index === selectedOption) {
                    stateClass = "border-red-500 bg-red-50 text-red-800 ring-2 ring-red-500/20";
                  } else {
                    stateClass = "opacity-40 border-gray-100 bg-white cursor-default";
                  }
                } else if (selectedOption === index) {
                  stateClass = "border-red-600 bg-red-50 text-red-800 ring-2 ring-red-600/20";
                }

                return (
                  <button
                    key={index}
                    disabled={isAnswered}
                    onClick={() => handleOptionSelect(index)}
                    className={cn(
                    "flex w-full items-center justify-between rounded-xl border p-5 text-left text-base font-semibold transition-colors md:text-lg",
                      stateClass
                    )}
                  >
                    <span className="flex-grow">{option}</span>
                    {isAnswered && index === currentQuestion.correctAnswer && (
                      <CheckCircle2 className="ml-4 h-6 w-6 flex-shrink-0 text-amber-600" />
                    )}
                    {isAnswered && index === selectedOption && index !== currentQuestion.correctAnswer && (
                      <XCircle className="h-6 w-6 text-red-600 flex-shrink-0 ml-4 animate-in zoom-in duration-300" />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Explanation reveal */}
            {isAnswered && (
              <div className={cn(
                "mt-10 flex gap-5 rounded-2xl border p-8",
                selectedOption === currentQuestion.correctAnswer ? "border-amber-600/20 bg-amber-50" : "border-red-600/20 bg-red-50"
              )}>
                <div className={cn(
                  "h-10 w-10 rounded-xl flex items-center justify-center flex-shrink-0",
                  selectedOption === currentQuestion.correctAnswer ? "bg-white text-amber-600" : "bg-white text-red-600"
                )}>
                  <Info className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-[10px] font-black uppercase tracking-[0.2em] mb-1.5 text-gray-400">Giải thích chi tiết</p>
                  <p className="text-base text-gray-700 font-semibold leading-relaxed">{currentQuestion.explanation}</p>
                </div>
              </div>
            )}

            {/* Actions */}
            <div className="mt-12 flex justify-end">
              {!isAnswered ? (
                <Button 
                  disabled={selectedOption === null}
                  onClick={handleCheckAnswer}
                  className="h-14 rounded-xl bg-red-600 px-10 text-base font-bold text-white hover:bg-red-800"
                >
                  Kiểm tra đáp án
                </Button>
              ) : (
                <Button 
                  onClick={handleNext}
                  className="h-14 rounded-xl bg-red-800 px-10 text-base font-bold text-white hover:bg-red-600"
                >
                  {currentQuestionIndex < questions.length - 1 ? "Tiếp tục" : "Hoàn thành"} <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Quiz;
