import React, { useState } from 'react';
import { post } from '../utils/post';

export default function Home() {
  const [count, setCount] = useState(0);

  const handleCountChange = (e: any) => {
    setCount(e.target.value);
  };

  const handleSend = () => {
    post({ type: 'create-rectangles', data: count });
  };

  const handleCancel = () => {
    post({ type: 'cancel', data: Number(count) });
  };

  return (
    <div className="container">
      <p>
        Count:
        <input
          type="number"
          id="count"
          value={count}
          onChange={handleCountChange}
        />
      </p>
      <button id="create" type="button" onClick={handleSend}>
        Create
      </button>
      <button id="cancel" type="button" onClick={handleCancel}>
        Cancel
      </button>
    </div>
  );
}
