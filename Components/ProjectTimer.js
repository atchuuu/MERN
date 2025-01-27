import React, { useState, useEffect } from "react";

const ProjectTimer = () => {
  const [isWorkTime, setIsWorkTime] = useState(true);
  const [timeLeft, setTimeLeft] = useState(0);
  const [workDuration, setWorkDuration] = useState(1500);
  const [breakDuration, setBreakDuration] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          alert(isWorkTime ? "Work time is over! Take a break." : "Break time is over! Back to work.");
          setIsWorkTime(!isWorkTime);
          return isWorkTime ? breakDuration : 1500;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, [isRunning, isWorkTime, breakDuration]);

  const formatTime = (s) => `${String(Math.floor(s / 60)).padStart(2, "0")}:${String(s % 60).padStart(2, "0")}`;

  return (
    <div>
      <h1>{isWorkTime ? "Work Timer" : "Break Timer"}</h1>
      
        Work Duration (minutes):
        <input type="number" value={workDuration / 60} onChange={(e) => setWorkDuration(e.target.value * 60)} disabled={isRunning} />
      
      
        Break Duration (minutes):
        <input type="number" value={breakDuration / 60} onChange={(e) => setBreakDuration(e.target.value * 60)} disabled={isRunning} />
      
      <h2>{formatTime(timeLeft)}</h2>
      <button onClick={() => { setTimeLeft(isWorkTime ? workDuration : breakDuration); setIsRunning(true); }} disabled={isRunning}>Start</button>
      <button onClick={() => setIsRunning(false)} disabled={!isRunning}>Stop</button>
      <button onClick={() => { setIsRunning(false); setIsWorkTime(true); setTimeLeft(0); }} disabled={!isRunning && timeLeft === 0}>Reset</button>
    </div>
  );
};

export default ProjectTimer;