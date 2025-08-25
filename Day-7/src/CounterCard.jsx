// CounterLivePreview.jsx
import React, { useState } from 'react';
import './CounterLivePreview.css';

export default function CounterLivePreview() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');

  return (
    <div className="counter-card">
      <div>
        <button className="counter-btn" onClick={() => setCount(count - 1)}>-</button>
        <span className="count">{count}</span>
        <button className="counter-btn" onClick={() => setCount(count + 1)}>+</button>
      </div>
      <input
        type="text"
        className="live-input"
        placeholder="Type anything..."
        value={text}
        onChange={e => setText(e.target.value)}
      />
      <p className="preview">Live Preview: <span>{text}</span></p>
    </div>
  );
}
