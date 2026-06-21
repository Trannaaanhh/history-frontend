import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const lines = content.split('\n');

  return (
    <div className="space-y-5">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        
        if (trimmedLine.startsWith('## ')) {
          return (
            <h2 key={index} className="mt-12 border-b border-gray-200 pb-4 font-serif text-3xl font-bold text-red-800">
              {trimmedLine.replace('## ', '')}
            </h2>
          );
        }
        
        if (trimmedLine.startsWith('- ')) {
          return (
            <li key={index} className="ml-6 list-disc pl-2 text-base leading-8 text-gray-700 marker:text-red-600">
              {trimmedLine.replace('- ', '')}
            </li>
          );
        }

        if (trimmedLine.startsWith('**') && trimmedLine.endsWith('**')) {
           // Basic support for bold lines if needed, but per requirements simple is fine
           return (
             <p key={index} className="font-bold text-gray-800">
               {trimmedLine.replace(/\*\*/g, '')}
             </p>
           );
        }
        
        if (trimmedLine === '') {
          return <div key={index} className="h-2" />;
        }
        
        // Handle bold markers in text briefly if they exist
        const parts = trimmedLine.split(/(\*\*.*?\*\*)/g);
        
        return (
          <p key={index} className="text-base leading-8 text-gray-700 sm:text-lg">
            {parts.map((part, i) => {
              if (part.startsWith('**') && part.endsWith('**')) {
                return <strong key={i} className="font-bold text-gray-900">{part.replace(/\*\*/g, '')}</strong>;
              }
              return part;
            })}
          </p>
        );
      })}
    </div>
  );
};

export default MarkdownRenderer;
