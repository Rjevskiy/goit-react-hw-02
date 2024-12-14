import './Options.css';

export default function Options({ onFeedback, onReset }) {
  return (
    <div className="options">
      <button className="feedback-button" onClick={() => onFeedback('good')}>
        Good
      </button>
      <button className="feedback-button" onClick={() => onFeedback('neutral')}>
        Neutral
      </button>
      <button className="feedback-button" onClick={() => onFeedback('bad')}>
        Bad
      </button>
      <button className="reset-button" onClick={onReset}>
        Reset
      </button>
    </div>
  );
}
