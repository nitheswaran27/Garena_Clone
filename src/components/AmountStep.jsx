import React, { useState, useEffect } from 'react';

const AmountStep = ({ game, selectedAmount, onSelect }) => {
  const [tab, setTab] = useState('purchase');
  const [timeLeft, setTimeLeft] = useState('');
  const list = tab === 'purchase' ? game.amounts : (game.redeemAmounts || []);

  useEffect(() => {
    if (game.id !== 'freefire') return;

    // Target: 3 days, 2 hours, 30 mins from now
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 3);
    targetDate.setHours(targetDate.getHours() + 2);
    targetDate.setMinutes(targetDate.getMinutes() + 30);

    const updateTimer = () => {
      const now = new Date();
      const diff = targetDate - now;

      if (diff <= 0) {
        setTimeLeft('Expired');
        return;
      }

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));

      setTimeLeft(`${d}d:${h}hrs:${m} minutes`);
    };

    updateTimer();
    const timer = setInterval(updateTimer, 60000);

    return () => clearInterval(timer);
  }, [game.id]);

  useEffect(() => {
    // reset selection when game changes
    onSelect(null);
  }, [game.id]); // eslint-disable-line react-hooks/exhaustive-deps

  const showRedeem = (game.redeemAmounts || []).length > 0;

  return (
    <div>
      <div className="flex flex-col sm:flex-row sm:items-center gap-x-4 gap-y-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="h-6 w-6 rounded-md bg-[#d92027] text-white text-xs font-bold flex items-center justify-center">
            2
          </span>
          <h3 className="text-[17px] font-bold text-gray-900">Top-up Amount</h3>
        </div>
        {game.id === 'freefire' && timeLeft && (
          <div className="inline-flex items-center gap-1.5 bg-[#d92027]/10 text-[#d92027] text-[12px] font-bold px-3 py-1 rounded-full animate-pulse border border-[#d92027]/20">
            Anniversary sale limitted deal :ends in : {timeLeft}
          </div>
        )}
      </div>

      {showRedeem && (
        <div className="inline-flex rounded-full border border-gray-200 bg-white p-1 mb-4">
          <button
            type="button"
            onClick={() => setTab('purchase')}
            className={`px-5 h-8 text-sm rounded-full transition-colors ${
              tab === 'purchase'
                ? 'border border-[#d92027] text-[#d92027] bg-white font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Purchase
          </button>
          <button
            type="button"
            onClick={() => setTab('redeem')}
            className={`px-5 h-8 text-sm rounded-full transition-colors ${
              tab === 'redeem'
                ? 'border border-[#d92027] text-[#d92027] bg-white font-semibold'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Redeem
          </button>
        </div>
      )}

      {list.length === 0 ? (
        <div className="text-sm text-gray-500 bg-white border border-dashed border-gray-200 rounded-lg p-6 text-center">
          No options available.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
          {list.map((amt) => {
            const active = selectedAmount === amt;
            const discount = (amt === 100 || amt === 310) ? '50%' : '10%';
            
            return (
              <button
                key={amt}
                type="button"
                onClick={() => onSelect(amt)}
                className={`relative h-[68px] rounded-lg bg-white border transition-all duration-150 flex items-center justify-center gap-2 ${
                  active
                    ? 'border-[#d92027] shadow-[0_4px_14px_rgba(217,32,39,0.18)] -translate-y-0.5'
                    : 'border-gray-200 hover:border-gray-300 hover:-translate-y-0.5 hover:shadow-sm'
                }`}
              >
                {/* Discount Tag */}
                <span className="absolute -top-1.5 -right-1.5 bg-[#d92027] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-md shadow-sm z-10">
                  {discount} OFF
                </span>

                <img
                  src={game.pointIcon}
                  alt={game.pointLabel}
                  className="h-6 w-6 object-contain"
                />
                <span
                  className={`text-[16px] font-semibold ${
                    active ? 'text-[#d92027]' : 'text-gray-900'
                  }`}
                >
                  {amt.toLocaleString()}
                </span>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default AmountStep;
