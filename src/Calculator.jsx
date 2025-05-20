import React, { useState } from 'react';

export default function Calculator() {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'AC') {
      setInput('');
    } else if (value === '+/-') {
      if (input) {
        setInput((parseFloat(input) * -1).toString());
      }
    } else if (value === '%') {
      if (input) {
        setInput((parseFloat(input) / 100).toString());
      }
    } else {
      setInput(input + value);
    }
  };

  const buttons = [
    'AC', '+/-', '%', '/',
    '7', '8', '9', '*',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '='
  ];

  const displayValue = input || '0';

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="w-80 bg-gray-900 rounded-2xl shadow-lg p-4">
        <div className="text-white text-4xl text-right mb-4 h-16 flex items-center justify-end px-2">
          {displayValue}
        </div>
        <div className="grid grid-cols-4 gap-3">
        {buttons.map((btn, i) => (
          <button
            key={i}
            onClick={() => handleClick(btn)}
            className={`text-white text-xl py-4 rounded-full transition ${
              btn === '0' ? 'col-span-2 text-left pl-6' : ''
            } ${
              ['/', '*', '-', '+', '='].includes(btn)
                ? 'bg-orange-500 hover:bg-orange-600'
                : ['AC', '+/-', '%'].includes(btn)
                ? 'bg-gray-400 text-black hover:bg-gray-500'
                : 'bg-gray-700 hover:bg-gray-600'
            }`}
          >
            {btn}
          </button>
        ))}
        </div>
      </div>
    </div>
  );
}
