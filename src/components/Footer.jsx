import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const links = [
    { label: 'About Us', href: '/about' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Terms and Conditions', href: '/terms' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Refund Policy', href: '/refund' },
  ];

  return (
    <footer className="w-full border-t border-gray-200 bg-white pt-8 pb-6">
      <div className="max-w-[1280px] mx-auto px-6">
        <div className="flex flex-col items-center text-center space-y-4">
          <nav className="flex items-center flex-wrap justify-center gap-x-4 gap-y-2">
            {links.map((link, idx) => (
              <React.Fragment key={link.label}>
                <Link
                  to={link.href}
                  className="text-xs font-medium text-gray-600 hover:text-[#d92027] transition-colors"
                >
                  {link.label}
                </Link>
                {idx < links.length - 1 && (
                  <span className="text-gray-300 text-xs">|</span>
                )}
              </React.Fragment>
            ))}
          </nav>
          
          <div className="max-w-2xl">
            <p className="text-[10px] text-gray-400 leading-relaxed uppercase tracking-wider">
              Disclaimer: This website is an independent third-party top-up service. We are NOT affiliated with, authorized, maintained, sponsored or endorsed by Garena Online or any of its affiliates or subsidiaries. All product and company names are the registered trademarks of their original owners.
            </p>
          </div>

          <p className="text-xs text-gray-500 font-medium pt-2">
            &copy; {new Date().getFullYear()} Garena Store Clone. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
