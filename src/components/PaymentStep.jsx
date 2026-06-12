import React from 'react';

const PaymentStep = ({ methods, selectedId, onSelect, selectedAmount, getPrice }) => {
  return (
    <div>
      <div className="flex items-center gap-2 mb-3">
        <span className="h-6 w-6 rounded-md bg-[#d92027] text-white text-xs font-bold flex items-center justify-center">
          3
        </span>
        <h3 className="text-[17px] font-bold text-gray-900">Payment Method</h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {methods.map((m) => {
          const active = selectedId === m.id;
          const currentPrice = selectedAmount ? getPrice(selectedAmount) : null;

          return (
            <button
              key={m.id}
              type="button"
              onClick={() => onSelect(m.id)}
              className={`relative h-[72px] rounded-lg bg-white border transition-all duration-150 flex items-center gap-4 px-4 text-left ${
                active
                  ? 'border-[#d92027] shadow-[0_4px_14px_rgba(217,32,39,0.18)]'
                  : 'border-gray-200 hover:border-gray-300 hover:shadow-sm'
              }`}
            >
              <div className="h-12 w-16 flex items-center justify-center flex-shrink-0">
                <img
                  src={m.icon}
                  alt={m.name}
                  className="max-h-12 max-w-full object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-[14px] font-semibold text-gray-900">{m.name}</span>
                {currentPrice && currentPrice !== 'N/A' && (
                  <span className="text-[#d92027] text-[13px] font-bold mt-0.5">
                    Pay ₹{currentPrice}
                  </span>
                )}
              </div>
              {m.promo && (
                <span className="absolute top-0 right-0 bg-[#ffb700] text-white text-[10px] font-bold px-2 py-0.5 rounded-tr-lg rounded-bl-lg leading-tight">
                  PROMO
                </span>
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default PaymentStep;
