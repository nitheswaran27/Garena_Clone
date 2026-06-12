import React from 'react';
import { ShieldCheck } from 'lucide-react';

const TopUpHeader = ({ game }) => {
  const isFreeFire = game.id === 'freefire';

  if (isFreeFire) {
    return (
      <div className="relative rounded-xl overflow-hidden shadow-md h-[108px] w-full">
        <picture>
          <source media="(max-width: 640px)" srcSet="/free-fire-banner-mobile.png" />
          <img 
            src="/free-fire-banner.png" 
            alt="Free Fire Banner" 
            className="h-full w-full object-cover"
          />
        </picture>
      </div>
    );
  }

  return (
    <div
      className="relative rounded-xl overflow-hidden shadow-md"
      style={{
        background: `linear-gradient(95deg, ${game.accent} 0%, ${game.accent}cc 60%, ${game.accent}99 100%)`
      }}
    >
      {/* decorative diagonal stripes */}
      <div className="absolute inset-0 opacity-15 pointer-events-none"
           style={{
             backgroundImage:
               'repeating-linear-gradient(115deg, rgba(255,255,255,0.15) 0 2px, transparent 2px 22px)'
           }}
      />
      <div className="relative flex items-center gap-5 px-6 py-5">
        <div className="h-[68px] w-[68px] rounded-2xl bg-white/95 p-1.5 shadow-md flex items-center justify-center flex-shrink-0">
          <img
            src={game.icon}
            alt={game.name}
            className="h-full w-full object-cover rounded-xl"
          />
        </div>
        <div>
          <h2 className="text-white text-[22px] font-extrabold tracking-tight leading-tight">
            {game.name}
          </h2>
          <div className="mt-2 inline-flex items-center gap-1.5 bg-black/40 text-white text-xs font-medium px-2.5 py-1 rounded-md">
            <ShieldCheck className="h-3.5 w-3.5 text-emerald-400" />
            100% Secure Payment
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopUpHeader;
