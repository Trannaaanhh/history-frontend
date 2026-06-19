import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Root from './components/Root';
import Home from './pages/Home';
import Lessons from './pages/Lessons';
import LessonDetail from './pages/LessonDetail';
import Quiz from './pages/Quiz';
import AIChat from './pages/AIChat';
import Progress from './pages/Progress';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: 'lessons', element: <Lessons /> },
      { path: 'lessons/:id', element: <LessonDetail /> },
      { path: 'quiz/:lessonId', element: <Quiz /> },
      { path: 'ai-chat', element: <AIChat /> },
      { path: 'progress', element: <Progress /> },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
