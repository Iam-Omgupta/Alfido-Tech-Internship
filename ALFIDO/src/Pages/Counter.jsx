import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen w-full flex justify-center items-center bg-[#E0E7FF]">
      <div className="flex flex-col justify-center items-center h-[450px] w-[350px]  border-[#ccc] rounded-xl bg-gradient-to-r from-[#F59E0B] to-[#FCD34D] text-white shadow-xl transition-all duration-300 transform hover:scale-110">
        <h2 className="text-2xl font-bold mb-4">Counter</h2>

        <div className="text-[50px] font-extrabold mb-6">{count}</div>

        <div className="flex flex-wrap justify-center gap-5">
          <button
            onClick={() => setCount(count + 1)}
            className="px-[20px] py-1 bg-[#10B981] items-center rounded-xl text-base transition transform hover:scale-120 duration-500"
          >
            ➕ Increase
          </button>
          <button
            onClick={() => setCount(count - 1)}
            className="px-[20px] py-1 bg-[#6EE7B7] rounded-xl items-center text-base transition transform  hover:scale-120 duration-500"
          >
            ➖ Decrease
          </button>
          <button
            onClick={() => setCount(0)}
            className="px-[20px] py-1 bg-[#ec4899] rounded-xl items-center text-base transition transform  hover:scale-120 duration-500"
          >
            🔁 Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Counter;
