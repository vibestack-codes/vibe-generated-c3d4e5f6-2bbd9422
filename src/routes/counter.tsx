import { useState } from "react";

/**
 * Counter component
 * Displays a counter with increment and decrement buttons
 * Dark theme with minimal, simple design
 */
export function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-950 px-4">
      <div className="flex flex-col items-center gap-8 rounded-lg border border-gray-800 bg-gray-900 p-8 shadow-xl">
        {/* Counter Display */}
        <div className="text-center">
          <p className="mb-2 text-sm font-medium text-gray-400">Counter</p>
          <div className="text-6xl font-bold text-gray-50">{count}</div>
        </div>

        {/* Control Buttons */}
        <div className="flex gap-4">
          {/* Minus Button */}
          <button
            onClick={decrement}
            className="flex h-16 w-16 items-center justify-center rounded-lg bg-red-600 text-2xl font-bold text-white transition-all hover:bg-red-700 active:scale-95"
            aria-label="Decrease counter"
          >
            −
          </button>

          {/* Plus Button */}
          <button
            onClick={increment}
            className="flex h-16 w-16 items-center justify-center rounded-lg bg-green-600 text-2xl font-bold text-white transition-all hover:bg-green-700 active:scale-95"
            aria-label="Increase counter"
          >
            +
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={() => setCount(0)}
          className="px-6 py-2 text-sm font-medium text-gray-300 transition-colors hover:text-gray-100"
          aria-label="Reset counter to zero"
        >
          Reset
        </button>
      </div>
    </div>
  );
}
