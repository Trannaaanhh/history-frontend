import React from 'react';

interface MarkdownRendererProps {
  content: string;
}

const MarkdownRenderer: React.FC<MarkdownRendererProps> = ({ content }) => {
  const lines = content.split('\n');

  return (
    <div className="space-y-4">
      {lines.map((line, index) => {
        const trimmedLine = line.trim();
        
        if (trimmedLine.startsWith('## ')) {
          return (
            <h2 key={index} className="text-2xl font-bold text-red-800 mt-10 mb-6 border-b border-red-100 pb-2">
              {trimmedLine.replace('## ', '')}
            </h2>
          );
        }
        
        if (trimmedLine.startsWith('- ')) {
          return (
            <li key={index} className="ml-6 text-gray-700 list-disc marker:text-red-600 pl-2">
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
          <p key={index} className="text-gray-700 leading-relaxed text-lg">
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
