import React from 'react';
import { footerLinks } from '../data/mock';

const Footer = () => {
  return (
    <footer className="w-full border-t border-gray-200 bg-white">
      <div className="max-w-[1280px] mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="text-xs text-gray-500">
          &copy; Garena Online. All rights reserved.
        </p>
        <nav className="flex items-center flex-wrap justify-center gap-x-2 gap-y-1">
          {footerLinks.map((link, idx) => (
            <React.Fragment key={link.label}>
              <a
                href={link.href}
                className="text-xs text-gray-600 hover:text-[#d92027] transition-colors"
              >
                {link.label}
              </a>
              {idx < footerLinks.length - 1 && (
                <span className="text-gray-300 text-xs">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
