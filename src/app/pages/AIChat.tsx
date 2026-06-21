import React, { useState, useRef, useEffect } from 'react';
import { knowledgeBase } from '../data/mockData';
import type { ChatMessage, KnowledgeBase } from '../data/mockData';
import { Button } from '@/app/components/ui/button';
import { Card } from '@/app/components/ui/card';
import { Avatar, AvatarFallback } from '@/app/components/ui/avatar';
import { Input } from '@/app/components/ui/input';
import { Badge } from '@/app/components/ui/badge';
import { Send, Bot, User, Info } from 'lucide-react';
import { cn } from '@/lib/utils';

const AIChat: React.FC = () => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: '1',
      role: 'assistant',
      content: 'Xin chào! Tôi là Trợ lý Lịch sử thông minh. Bạn muốn tìm hiểu về triều đại hay sự kiện lịch sử nào của Việt Nam hôm nay?',
      timestamp: new Date(),
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatScrollRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    'Kể về nhà Trần?',
    'Khởi nghĩa Lam Sơn diễn ra khi nào?',
    'Chiến thắng Điện Biên Phủ?',
    'Ngô Quyền đánh quân Nam Hán?',
  ];

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTo({
        top: chatScrollRef.current.scrollHeight,
        behavior: 'smooth',
      });
    }
  }, [messages, isTyping]);

  const findBestMatch = (query: string): KnowledgeBase | null => {
    const lowercaseQuery = query.toLowerCase();
    let bestMatch: KnowledgeBase | null = null;
    let maxMatches = 0;

    knowledgeBase.forEach(item => {
      const topicKeywords = item.topic.toLowerCase().split(' ');
      let currentMatches = 0;
      topicKeywords.forEach(keyword => {
        if (lowercaseQuery.includes(keyword)) {
          currentMatches++;
        }
      });

      if (currentMatches > maxMatches) {
        maxMatches = currentMatches;
        bestMatch = item;
      }
    });

    return bestMatch;
  };

  const handleSend = (text: string) => {
    if (!text.trim()) return;

    const userMessage: ChatMessage = {
      id: String(messages.length + 1),
      role: 'user',
      content: text,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    // Simulate RAG retrieval and response
    setTimeout(() => {
      const match = findBestMatch(text);
      const assistantMessage: ChatMessage = {
        id: String(messages.length + 2),
        role: 'assistant',
        content: match 
          ? match.content 
          : "Xin lỗi, tôi chưa tìm thấy thông tin chi tiết về nội dung này trong cơ sở dữ liệu. Bạn có thể hỏi về các triều đại như Lý, Trần, hay các sự kiện như Điện Biên Phủ, khởi nghĩa Lam Sơn không?",
        timestamp: new Date(),
        sources: match ? [match.topic] : undefined,
      };

      setMessages(prev => [...prev, assistantMessage]);
      setIsTyping(false);
    }, 1500);
  };

  return (
    <div className="flex h-[calc(100dvh-72px)] min-h-0 flex-col overflow-hidden bg-red-50">
      <div className="container mx-auto max-w-5xl min-h-0 flex-1 flex flex-col p-4 md:p-6 lg:p-8 overflow-hidden">
        
        {/* Header */}
        <div className="flex shrink-0 items-center gap-4 mb-4 md:mb-6">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-600 text-white">
            <Bot className="h-7 w-7" />
          </div>
          <div>
            <h1 className="flex items-center gap-3 font-serif text-2xl font-bold text-red-800">
              Trợ lý Lịch sử AI <Badge className="bg-amber-100 text-amber-700 hover:bg-amber-100 border-none text-[10px] font-black tracking-widest px-2 py-0.5">RAG ENABLED</Badge>
            </h1>
            <p className="text-[11px] text-gray-400 font-bold uppercase tracking-widest">Đang trực tuyến | Cơ sở dữ liệu THPT chính thống</p>
          </div>
        </div>

        {/* Chat Area */}
        <Card className="relative flex min-h-0 flex-1 flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-none">
          <div
            ref={chatScrollRef}
            className="min-h-0 flex-1 overflow-y-auto overscroll-contain scroll-smooth"
          >
            <div className="p-6 md:p-8 space-y-8">
              {messages.map((msg) => (
                <div key={msg.id} className={cn(
                  "flex gap-5",
                  msg.role === 'user' ? "flex-row-reverse" : "flex-row"
                )}>
                  <Avatar className={cn(
                    "h-10 w-10 border border-gray-200",
                    msg.role === 'assistant' ? "bg-red-50" : "bg-amber-50"
                  )}>
                    <AvatarFallback className={cn("font-black text-sm", msg.role === 'assistant' ? "text-red-600" : "text-amber-600")}>
                      {msg.role === 'assistant' ? <Bot className="h-5 w-5" /> : <User className="h-5 w-5" />}
                    </AvatarFallback>
                  </Avatar>
                  
                  <div className={cn(
                    "flex flex-col gap-3 max-w-[85%] md:max-w-[70%]",
                    msg.role === 'user' ? "items-end" : "items-start"
                  )}>
                    <div className={cn(
                      "rounded-2xl border p-5 text-base font-medium leading-7 md:text-lg",
                      msg.role === 'user' 
                        ? "border-red-600 bg-red-600 text-white rounded-tr-none"
                        : "border-gray-200 bg-gray-50 text-gray-800 rounded-tl-none"
                    )}>
                      {msg.content}
                    </div>
                    
                    {msg.sources && (
                      <div className="flex flex-wrap gap-2 px-1">
                        <span className="text-[10px] font-black text-gray-300 uppercase tracking-widest flex items-center gap-1.5">
                          <Info className="h-3 w-3" /> Nguồn:
                        </span>
                        {msg.sources.map((s, i) => (
                          <Badge key={i} variant="outline" className="text-[10px] bg-amber-50/50 text-amber-700 border-amber-100 font-black px-3 py-0.5 rounded-full">
                            {s}
                          </Badge>
                        ))}
                      </div>
                    )}
                    
                    <span className="text-[10px] text-gray-300 font-black uppercase tracking-tighter px-2">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
              
              {isTyping && (
                <div className="flex gap-5">
                  <Avatar className="h-10 w-10 border border-gray-200 bg-red-50">
                    <AvatarFallback className="text-red-600">
                      <Bot className="h-5 w-5" />
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex items-center gap-1.5 rounded-2xl rounded-tl-none border border-gray-200 bg-gray-50 p-6">
                    <div className="h-2 w-2 bg-red-200 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="h-2 w-2 bg-red-300 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="h-2 w-2 bg-red-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Input Area */}
          <div className="shrink-0 p-4 md:p-6 bg-gray-50/30 border-t border-gray-100">
            {/* Suggested Chips */}
            <div className="flex flex-wrap gap-2 mb-4 justify-center">
              {suggestedQuestions.map((q, i) => (
                <button
                  key={i}
                  disabled={isTyping}
                  onClick={() => handleSend(q)}
                  className="rounded-xl border border-gray-200 bg-white px-4 py-2 text-[11px] font-bold text-gray-500 transition-colors hover:border-red-600 hover:bg-red-50 hover:text-red-600 disabled:opacity-50"
                >
                  {q}
                </button>
              ))}
            </div>

            <form 
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="relative flex items-center max-w-3xl mx-auto w-full"
            >
              <Input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Hỏi bất cứ điều gì về lịch sử Việt Nam..."
                className="h-14 rounded-xl border-gray-200 bg-white pr-16 text-base font-medium placeholder:text-gray-400 focus:border-red-600 focus:ring-red-600/10 md:text-lg"
                disabled={isTyping}
              />
              <Button 
                type="submit"
                disabled={!input.trim() || isTyping}
                className="absolute right-2.5 h-11 w-11 rounded-xl bg-red-600 text-white hover:bg-red-800"
                size="icon"
              >
                <Send className="h-5 w-5" />
              </Button>
            </form>
            <div className="flex items-center justify-center gap-2 mt-3">
              <div className="h-1 w-1 rounded-full bg-amber-400 animate-pulse" />
              <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] italic">
                AI Phục vụ học tập - Dữ liệu chính thống
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default AIChat;
