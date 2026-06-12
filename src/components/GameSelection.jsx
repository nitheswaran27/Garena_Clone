import React from 'react';
import { Check } from 'lucide-react';

const GameSelection = ({ games, selectedId, onSelect }) => {
  return (
    <section className="w-full bg-[#f1f1f1]">
      <div className="max-w-[1280px] mx-auto px-6 pt-6 pb-10">
        <h2 className="text-[15px] font-semibold text-gray-900 mb-5">Game Selection</h2>
        <div className="grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 lg:grid-cols-8 gap-4">
          {games.map((game) => {
            const active = game.id === selectedId;
            return (
              <button
                key={game.id}
                onClick={() => onSelect(game.id)}
                className="group flex flex-col items-center text-center focus:outline-none"
              >
                <div
                  className={`relative w-[70px] h-[70px] rounded-[14px] overflow-hidden bg-white transition-all duration-200 ${
                    active
                      ? 'ring-2 ring-[#d92027] shadow-[0_6px_18px_rgba(217,32,39,0.25)]'
                      : 'ring-1 ring-gray-200 hover:ring-gray-300 hover:-translate-y-0.5 shadow-sm'
                  }`}
                >
                  <img
                    src={game.icon}
                    alt={game.name}
                    className="w-full h-full object-cover"
                    draggable="false"
                  />
                  {game.badge && (
                    <span className="absolute top-0 left-0 bg-[#ff3b30] text-white text-[9px] font-bold px-1.5 py-[2px] rounded-br-md leading-none">
                      {game.badge}
                    </span>
                  )}
                  {active && (
                    <span className="absolute top-1 right-1 h-4 w-4 rounded-full bg-[#d92027] text-white flex items-center justify-center shadow">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                  )}
                </div>
                <span
                  className={`mt-2 text-[12px] leading-tight max-w-[90px] ${
                    active ? 'text-[#d92027] font-semibold' : 'text-gray-800 font-medium'
                  }`}
                >
                  {game.name}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default GameSelection;
