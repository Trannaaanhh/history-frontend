import { useCallback, useEffect, useState } from 'react';
import type { UserProgress } from '../data/mockData';

const STORAGE_KEY = 'ls-history-progress';

const DEFAULT_PROGRESS: UserProgress = {
  completedLessons: [],
  quizScores: {},
};

export const useProgress = () => {
  const [progress, setProgress] = useState<UserProgress>(() => {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch {
        return DEFAULT_PROGRESS;
      }
    }
    return DEFAULT_PROGRESS;
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const completeLesson = useCallback((lessonId: string) => {
    setProgress((prev) => {
      if (prev.completedLessons.includes(lessonId)) return prev;
      return {
        ...prev,
        completedLessons: [...prev.completedLessons, lessonId],
      };
    });
  }, []);

  const updateQuizScore = useCallback((lessonId: string, score: number) => {
    setProgress((prev) => {
      const currentBest = prev.quizScores[lessonId] || 0;
      if (score <= currentBest) return prev;
      return {
        ...prev,
        quizScores: {
          ...prev.quizScores,
          [lessonId]: score,
        },
      };
    });
  }, []);

  return {
    progress,
    completeLesson,
    updateQuizScore,
  };
};
