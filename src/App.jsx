import './styles/App.css';
import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';
import { useState } from 'react';

function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  const incrementFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });
  };

  const total = feedback.good + feedback.neutral + feedback.bad;
  const positive = total > 0 ? Math.round((feedback.good / total) * 100) : 0;

  return (
    <div className="app-container">
      <Description />
      <Options onFeedback={incrementFeedback} onReset={resetFeedback} />
      <Feedback feedback={feedback} total={total} positive={positive} />
    </div>
  );
}

export default App;
