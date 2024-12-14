import { useState, useEffect } from 'react';

import Description from './components/Description/Description';
import Options from './components/Options/Options';
import Feedback from './components/Feedback/Feedback';

import './styles/App.css';

import Notification from './components/Notification/Notification';


function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });/*console.log(0)*/;


  useEffect(() => {
    const savedFeedback = JSON.parse(localStorage.getItem('feedback'));
    if (savedFeedback) {
     /* console.log(1)*/;
      
      setFeedback(savedFeedback);
    }
  }, []);


  useEffect(() => {
    localStorage.setItem('feedback', JSON.stringify(feedback));/*console.log(2)*/;
  },
    [feedback]);    

  const incrementFeedback = (type) => {
    setFeedback((prev) => ({ ...prev, [type]: prev[type] + 1 }));/*console.log(3)*/;
  };

  const resetFeedback = () => {
    setFeedback({ good: 0, neutral: 0, bad: 0 });/*console.log(4)*/;
  };

  const totalFeedback = feedback.good + feedback.neutral + feedback.bad;/*console.log(5)*/;

  const positive = totalFeedback > 0 ? Math.round((feedback.good / totalFeedback) * 100) : 0;/*console.log(6)*/;

  return (
    <div className="app-container" >
      <Description />
      <Options 
        onFeedback={incrementFeedback}
        onReset={resetFeedback}
        showResetButton={totalFeedback > 0}
      />

      {totalFeedback === 0 ? (
        <Notification />
      ) : (
        <Feedback feedback={feedback} total={totalFeedback} positive={positive} />
      )}
    </div>
  );
}/*console.log(7)*/;

export default App;
