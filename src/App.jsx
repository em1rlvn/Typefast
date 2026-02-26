import { useEffect, useState } from 'react';
import './index.css';

import Timer from "./components/Timer";
import TextDisplay from "./components/TextDisplay";
import InputField from "./components/InputField";
import Result from "./components/Result";
import Navbar from "./components/Navbar";

function App() {
  const [text, setText] = useState("");
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");
  const [time, setTime] = useState(120);

  const [isRunning, setIsRunning] = useState(false);
  const [accuracy, setAccuracy] = useState(100);
  const [finished, setFinished] = useState(false);
  const [showStats, setShowStats] = useState(false);
  const [loading, setLoading] = useState(false); 
  const loadNewText = async () => {
    setLoading(true);
    try {
      const response = await fetch("https://baconipsum.com/api/?type=meat-and-filler&paras=2");
      const data = await response.json();
      const newText = data[0] || "Не удалось загрузить текст...";

      setText(newText);
      setCount(newText.split(" ").length);
      setInput("");
      setIsRunning(false);
      setFinished(false);
      setTime(30);           
      setAccuracy(100);
    } catch (err) {
      console.error("Ошибка:", err);
      setText("Ошибка загрузки. Попробуйте ещё раз.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadNewText();
  }, []);

  const handleInputChange = (e) => {
    const newValue = e.target.value;
    setInput(newValue);

    if (newValue.length === 1 && !isRunning && !finished) {
      setIsRunning(true);
    }

    if (newValue === text) {
      setFinished(true);
      setIsRunning(false);
    }
  };

  

  return (
    <div className="app-wrapper">
      <Navbar 
        onShowStats={() => setShowStats(true)}
        onNewText={loadNewText}        
        loading={loading}                
      />

      <main className="main-content">
        <h1>Check your typing speed</h1>

        {loading ? (
          <p style={{ fontSize: '1.4rem', color: '#94a3b8', margin: '2rem 0' }}>
            Loading new text...
          </p>
        ) : (
          
          <>
            <Timer 
              time={time} 
              setTime={setTime} 
              isRunning={isRunning} 
              setFinished={setFinished} 
            />
                 <InputField
  value={input}                     
  onChange={(e) => {
    const newVal = e.target.value;
    setInput(newVal);

    if (newVal.length === 1 && !isRunning && !finished) {
      setIsRunning(true);
    }
  }}
  disabled={finished}
/>


            <TextDisplay text={text} input={input} />

    
            <Result 
              text={text} 
              input={input} 
              finished={finished} 
            />
          </>
        )}
      </main>

      {showStats && (
        <div 
          className={`simple-stats-overlay ${showStats ? 'visible' : ''}`} 
          onClick={() => setShowStats(false)}
        >
          <div className="simple-stats-box" onClick={(e) => e.stopPropagation()}>
            <button className="close-stats" onClick={() => setShowStats(false)}>×</button>
            
            <h2>AVG Stats (Source: Google)</h2>
            
            <ul>
              <li>Large adults: ~40 words per minute (WPM)</li>
              <li>Comfortable typing speed: 60–70 WPM</li>
              <li>Professionals (secretaries, typists): 80–100+ WPM</li>
              <li>Record holders: 120–250+ WPM</li>
            </ul>

            <p style={{ marginTop: '1.5rem', color: '#94a3b8' }}>
              Твоя текущая статистика пока не сохраняется — это просто справочная информация.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;