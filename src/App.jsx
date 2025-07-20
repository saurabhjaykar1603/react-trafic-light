import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [activeLight, setActiveLight] = useState("red");
  const [isRunning, setIsRunning] = useState(false);
  const [countdown, setCountdown] = useState(2);

  useEffect(() => {
    if (isRunning) {
      const countdownInterval = setInterval(() => {
        setCountdown((prev) => {
          if (prev <= 0) {
            // When countdown reaches 0, change the light and reset countdown
            setActiveLight((currentLight) => {
              return currentLight === "red"
                ? "green"
                : currentLight === "green"
                ? "yellow"
                : "red";
            });
            return 2; // Reset countdown
          }
          return prev - 1;
        });
      }, 1000); // Update countdown every second

      return () => clearInterval(countdownInterval);
    } else {
      setCountdown(2);
    }
  }, [isRunning]);

  return (
    <>
      <div
        className="traffic-light"
        style={{
          backgroundColor: "black",
          justifyContent: "center",
          alignItems: "center",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: activeLight === "red" ? "red" : "#e0e0e0",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
          {activeLight === "red" && isRunning && countdown}
        </div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: activeLight === "yellow" ? "yellow" : "#e0e0e0",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "black",
            fontSize: "24px",
          }}
        >
          {activeLight === "yellow" && isRunning && countdown}
        </div>
        <div
          style={{
            width: "100px",
            height: "100px",
            backgroundColor: activeLight === "green" ? "green" : "#e0e0e0",
            borderRadius: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "white",
            fontSize: "24px",
          }}
        >
          {activeLight === "green" && isRunning && countdown}
        </div>
        <button onClick={() => setIsRunning(!isRunning)}>
          {isRunning ? "Stop" : "Start"}
        </button>
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "red",
            color: "white",
          }}
          onClick={() => {
            setActiveLight("red");
            setIsRunning(false);
            setCountdown(2);
          }}
        >
          Red
        </button>
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "yellow",
            color: "black",
          }}
          onClick={() => {
            setIsRunning(false);
            setActiveLight("yellow");
            setCountdown(2);
          }}
        >
          Yellow
        </button>
        <button
          style={{
            padding: "10px",
            borderRadius: "5px",
            backgroundColor: "green",
            color: "white",
          }}
          onClick={() => {
            setActiveLight("green");
            setIsRunning(false);
            setCountdown(2);
          }}
        >
          Green
        </button>
      </div>
    </>
  );
}

export default App;
