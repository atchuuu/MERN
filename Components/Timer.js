import React, { useState, useEffect } from "react";

const Timer = () => {
  const [isWorkTime, setIsWorkTime] = useState(true); // true for work, false for break
  const [timeLeft, setTimeLeft] = useState(0);
  const [workDuration, setWorkDuration] = useState(25 * 60); // Default work time: 25 mins
  const [breakDuration, setBreakDuration] = useState(5 * 60); // Default break time: 5 mins
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => {
          if (prevTime <= 1) {
            clearInterval(timer);
            if (isWorkTime) {
              alert("Work time is over! Break time starts now.");
              setIsWorkTime(false);
              return breakDuration;
            } else {
              alert("Break time is over! Back to work.");
              setIsWorkTime(true);
              setWorkDuration(25 * 60); // Reset work duration to default
              return 25 * 60;
            }
          }
          return prevTime - 1;
        });
      }, 1000);
    }

    return () => clearInterval(timer);
  }, [isRunning, isWorkTime, breakDuration, workDuration]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds
      .toString()
      .padStart(2, "0")}`;
  };

  const handleStart = () => {
    setTimeLeft(isWorkTime ? workDuration : breakDuration);
    setIsRunning(true);
  };

  const handleStop = () => {
    setIsRunning(false);
  };

  const handleReset = () => {
    setIsRunning(false);
    setIsWorkTime(true);
    setTimeLeft(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-2xl font-bold mb-4">
          {isWorkTime ? "Work Timer" : "Break Timer"}
        </h1>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Work Duration (minutes):</label>
          <input
            type="number"
            className="border px-2 py-1 rounded"
            value={workDuration / 60}
            onChange={(e) => setWorkDuration(e.target.value * 60)}
            disabled={isRunning}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-2 font-medium">Break Duration (minutes):</label>
          <input
            type="number"
            className="border px-2 py-1 rounded"
            value={breakDuration / 60}
            onChange={(e) => setBreakDuration(e.target.value * 60)}
            disabled={isRunning}
          />
        </div>

        <p className="text-4xl font-mono mb-4">{formatTime(timeLeft)}</p>

        <div className="space-x-4">
          <button
            className="bg-green-500 text-white px-4 py-2 rounded shadow hover:bg-green-600 disabled:bg-gray-400"
            onClick={handleStart}
            disabled={isRunning}
          >
            Start
          </button>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded shadow hover:bg-red-600 disabled:bg-gray-400"
            onClick={handleStop}
            disabled={!isRunning}
          >
            Stop
          </button>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded shadow hover:bg-blue-600 disabled:bg-gray-400"
            onClick={handleReset}
            disabled={!isRunning && timeLeft === 0}
          >
            Reset
          </button>
        </div>
      </div>
    </div>
  );
};

export default Timer;
