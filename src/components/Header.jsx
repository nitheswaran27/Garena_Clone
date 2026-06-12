import React from 'react';
import { User } from 'lucide-react';

const GARENA_LOGO = '/Garena logo.png';

const Header = () => {
  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-[1280px] mx-auto h-[60px] px-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <a href="/" className="flex items-center gap-2 group">
            <img
              src={GARENA_LOGO}
              alt="Garena"
              className="h-8 w-auto transition-transform duration-200 group-hover:scale-105"
            />
          </a>
          <span className="text-gray-300">|</span>
          <span className="text-sm font-medium text-gray-800">Official Top Up Center</span>
        </div>
        <button
          aria-label="Account"
          className="h-9 w-9 rounded-full flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-100 transition-colors"
        >
          <User className="h-5 w-5" />
        </button>
      </div>
    </header>
  );
};

export default Header;
