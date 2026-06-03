import { MouseEvent } from 'react';

const File = () => {
  const magnetUrl = 'magnet:?xt=urn:btih:781A39BA6152EEA0A435B8EB0B29974C87323E5E';

  const handleDownload = (e) => {
    e.preventDefault(); 
    
    const link = document.createElement('a');
    link.href = magnetUrl;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="flex items-center justify-center p-4">
      <button
        onClick={handleDownload}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg shadow-md transition-colors duration-200 flex items-center gap-2"
      >
        {/* Иконка скачивания (SVG) */}
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          fill="none" 
          viewBox="0 0 24 24" 
          strokeWidth={2} 
          stroke="currentColor" 
          className="w-5 h-5"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" 
          />
        </svg>
        Скачать через торрент
      </button>
    </div>
  );
};

export default File;